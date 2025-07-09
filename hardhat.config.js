require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");
require("dotenv").config();

const INFURA_NODO = process.env.NODO; // ESCRIBIR EN LA BLOCKCHAIN
const SEPOLIA_PRIVATE_KEY = process.env.PRKEY; // eL QUE PAGA EL GAS
const ETHERSCAN_API_KEY = process.env.ETHSCAN_KEY; // VERIFICAR EL CONTRATO

module.exports = {
  solidity: "0.8.24",
  gasReporter: {
    enabled: true,
  },
  networks: {
    sepolia: {
      url: INFURA_NODO,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
};
