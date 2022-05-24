const { MerkleTree } = require("merkletreejs");
const fs = require("fs");

const PROOF_PATH = "./json/proof.json";

function buildMerkleTree(addressList, hashFunction) {
  const leafNodes = addressList.map((addr) => hashFunction(addr));
  const merkleTree = new MerkleTree(leafNodes, hashFunction, {
    sortPairs: true,
  });
  console.log(`merkle tree root: "${merkleTree.getHexRoot()}"`);
  return { leafNodes, merkleTree };
}

function generateMerkleProof(claimAddress, merkleTree, hashFunction) {
  console.log(`generating merkle proof for address "${claimAddress}"...`);
  if (!claimAddress || !claimAddress.startsWith("0x")) {
    throw new Error(
      `claimAddress "${claimAddress}" is not a valid ethereum address`
    );
  }

  const hexProof = merkleTree.getHexProof(hashFunction(claimAddress));

  fs.writeFileSync(PROOF_PATH, JSON.stringify(hexProof, undefined, 2));
  console.log(`proof are writed to: "${PROOF_PATH}"`);
  return hexProof;
}

module.exports = {
  buildMerkleTree,
  generateMerkleProof,
  PROOF_PATH,
};
