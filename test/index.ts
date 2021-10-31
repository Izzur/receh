import { expect } from "chai";
import { ethers } from "hardhat";

describe("RECEH", function () {
  it("Should return correct totalSupply", async function () {
    const recehFactory = await ethers.getContractFactory("RECEHToken");
    const receh = await recehFactory.deploy();
    await receh.deployed();

    expect(await receh.totalSupply()).to.equal(100_000_000);
  });

  it("Should return zero for lastTransactionAmount for first time", async function () {
    const recehFactory = await ethers.getContractFactory("RECEHToken");
    const receh = await recehFactory.deploy();
    await receh.deployed();

    expect(await receh.getLastTransactionAmount()).to.equal(0);
  });

  it("Should return zero balance for first time", async function () {
    const recehFactory = await ethers.getContractFactory("RECEHToken");
    const receh = await recehFactory.deploy();
    await receh.deployed();

    expect(await receh.balanceOf(receh.address)).to.equal(0);
  });

  it("Should complete transfer and return true", async function () {
    // const setGreetingTx = await receh.setGreeting("Hola, mundo!");
    // wait until the transaction is mined
    // await setGreetingTx.wait();
  });
});
