// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    event VRF();

    uint256 public counter;
    uint256 public price;
    address public oracle;
    address public owner;
    address public winner;
    mapping(uint256 => address) public player;

    modifier minAmount(uint256 value){
        require(value == price, "Insufficient founds");
        _;
    }

    modifier onlyOracle(){
        require(msg.sender == oracle, "No Permissions");
        _;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "No Permissions");
        _;
    }

    constructor(){
        owner = msg.sender;
    }

    function play() payable external minAmount(msg.value){  // falta modifier fin del juego
        uint _counter = counter++;
        player[_counter] = msg.sender;

        //cuando llegue a 100 termina (counter vale 100, pero _counter vale 99, 
        // xq "counter++" primero asigna el valor que traía y luego lo incrementa)
        if(_counter == 3){ 
            emit VRF();
        }

        // Falta chequear el fin del juego
    }

    function setOracle (address _oracle) external onlyOwner(){
        oracle = _oracle;
    }

    function fullFillRandomness(uint256 _random) external{
        address payable _winner;
        _winner = payable(player[_random]);
        _winner.transfer(address(this).balance);  // mejor sería un call y agregar noReentrant. Si dejo transfer, no hay problema de reentrancia

        winner = _winner;
        // falta emitir un evento que se emita con el ganador
        
    }

}

