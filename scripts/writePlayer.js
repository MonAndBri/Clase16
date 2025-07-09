const { ethers } = require("hardhat");

async function main(params) {
    //Esto sabe donde llaamrlo, pero no sabe cómo xq no tiene la ABI
    _addr = "0x74E9Ec4BDad77702EFD0cAd04c9529DA590A8fC4"; // Direccion del contrato Lottery.sol en sepolia
    // Tiene la ABI, sabe como llamarlo, pero no sabe donde
    Lottery = await ethers.getContractFactory("Lottery"); //Este Lottery lo toma de Lottery.json y ahí está la ABI
    // Entonces tengo que unirlos, atacharlos
    lottery = Lottery.attach(_addr); // Eso es lo mismo que hace remix con "At Address"
    tx = await lottery.play();
    console.log(tx);
}

main();