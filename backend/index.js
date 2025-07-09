const ethers = require("ethers");

// conexion al nodo local
//const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/1517aa04ef72416e9e46dc85c5274875");

// Direccion del comtrato
//const contractAddress = "0x2E983A1Ba5e8b38AAAeC4B440B9dDcFBf72E15d1"; //no uso el mío xq le falta mucho para llegar a 100
const contractAddress = "0x74E9Ec4BDad77702EFD0cAd04c9529DA590A8fC4"; 

// ABI del contrato, asegurate de incluir el correcto
const abi = [
    // Agrega acá la definicion del evento VRFAsk
    "event VRF()"];

async function main() {
    // genero una nueva instancia del contrato
    const contrac = new ethers.Contract(contractAddress, abi, provider); // acá ya queda todo atachado

    // le digo qué evento escuchar (escucha el evento VRFAsk)
    contrac.on("VRF", () => {
        console.log("recibí un evento");
    });

    console.log("estoy escuchando evento");
}

// ejecuta el programa
main().catch((error) => {
    console.error(error);
    console.exit(1);
});