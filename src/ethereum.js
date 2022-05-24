const { Wallet } = require("ethers");
const fs = require("fs");

const ACCOUNT_LIST_PATH = "./json/accounts.json";

function loadAddressList(accountsFile) {
  return JSON.parse(fs.readFileSync(accountsFile).toString()).map((acc) => {
    if (typeof acc === "string") return acc;
    return acc.address;
  });
}

function generateAccounts(count) {
  const accounts = [];

  console.log(`generating ${count} accounts...`);
  for (let i = 0; i < count; i++) {
    const { address, privateKey } = Wallet.createRandom();
    accounts.push({ address, privateKey });
  }

  console.log("write out...");
  fs.writeFileSync(ACCOUNT_LIST_PATH, JSON.stringify(accounts, undefined, 2));
  console.log(`done, ${count} accounts are writed to: "${ACCOUNT_LIST_PATH}"`);

  return accounts;
}

module.exports = {
  ACCOUNT_LIST_PATH,
  generateAccounts,
  loadAddressList,
};
