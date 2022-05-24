const { generateAccounts } = require("./src/ethereum");

generateAccounts(process.argv[2] || 5);
