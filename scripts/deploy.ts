import { formatBytes32String } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main() {
  // const Lock = await ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  const ViddleCoin = await ethers.getContractFactory("ViddleCoin");
  const viddlecoin = await ViddleCoin.deploy();

  const MusicViddle = await ethers.getContractFactory("MusicViddle");
  const musicviddle = await MusicViddle.deploy(viddlecoin.address);

  const setHash = await musicviddle.changeAnswerHash(
    "0x3832633861633562646436353334616437633136346534653032656565383033"
  );

  const makeGuess = await musicviddle.guess(formatBytes32String("take on me"));

  // console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
