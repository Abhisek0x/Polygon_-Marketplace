/* hardhat.config.js */
require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

// const fs = require("fs");
// const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    mainnet: {
      url: "https://polygon-mainnet.infura.io/v3/a3215e5799f2462c80c17402290f9253",
    },
  },
  solidity: "0.8.4",
};
