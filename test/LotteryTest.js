const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Lottery", function () {
    let Lottery; // Acá voy a tener todos los datos del contrato nec. para poder deployaelo
    let lottery; // Acá voy a tener el contrato deployado
    // beforeEach se ejecuta antes de cada it
    // before se ejecuta una sola vez y luego corre todos los it
    beforeEach(async function () {
        Lottery = await ethers.getContractFactory("Lottery");
        lottery = await Lottery.deploy();  //Si tuviera un constructor le tendría q enviar parámetros  
    });

    it("testing setOracle()", async function () {
        await lottery.setOracle("0x1234567890123456789012345678901234567890"); //direccion inventada
        let result = await lottery.oracle(); // direccion de oraculo
        expect(result).to.equal("0x1234567890123456789012345678901234567890"); //el valor que espero
    });

    it("testing play()", async function () {
        let counterBefore = await lottery.counter();
        await lottery.play();
        let counterAfter = await lottery.counter();
        let result = counterAfter - counterBefore;
        expect(result).to.equal(1); //el valor que espero de esta prueba
    });

    //Si quiero probar que falle cuando mando un valor que tiene que fallar
    //lo pongo en el catch
    /*it("testing play()", async function () {
        try {
            let counterBefore = await lottery.counter();
            await lottery.play();
            let counterAfter = await lottery.counter();
            let result = counterAfter - counterBefore;
            expect(result).to.equal(1); //el valor que espero de esta prueba
        } catch (error) {
            expect(error.reason).to.include("not the price");
        }
    });*/



});