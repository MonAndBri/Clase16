const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const LotteryModule = buildModule("LotteryModule", (deployer) => {
  //El primer parámetro es el nombre de mi contrato y luego los parámetros del constructor
  // como mi constructor no tiene parámetros, quito el segundo partámetro del deployer
  const lottery = deployer.contract("Lottery");

  return { lottery };
});

module.exports = LotteryModule;