// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "./Ownable.sol";
import "./ViddleCoin.sol";
import "../node_modules/hardhat/console.sol";

contract MusicViddle is Ownable {
  bytes32 dailyAnswerHash;

  ViddleCoin viddlecoin;

  constructor(address _viddlecoin) payable {
    viddlecoin = ViddleCoin(_viddlecoin);
  }

  function changeAnswerHash(bytes32 newHash) public onlyOwner {
    dailyAnswerHash = newHash;
  }

  function guess(bytes32 guess) public {
    if (keccak256(abi.encode(guess)) == dailyAnswerHash) {
      viddlecoin.mint(_msgSender(), 1);
      console.log("You guessed correctly");
    }
  }
}
