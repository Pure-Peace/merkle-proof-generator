const { loadAddressList, ACCOUNT_LIST_PATH } = require("./src/ethereum");
const { buildMerkleTree, generateMerkleProof } = require("./src/merkle");

const keccak256 = require("keccak256");

const hashFunction = keccak256;

const claimAddress = process.argv[2];
const whiteList = loadAddressList(ACCOUNT_LIST_PATH);
const { merkleTree } = buildMerkleTree(whiteList, hashFunction);
generateMerkleProof(claimAddress, merkleTree, hashFunction);
