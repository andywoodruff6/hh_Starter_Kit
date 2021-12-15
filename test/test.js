const { networkConfig }  = require('../helper-hardhat-config');
const { assert, expect } = require("chai");
const { ethers }         = require("hardhat");

//VARIABLES
let expected 
let result

describe("Contract 1", () => {
    describe("function 1", () => {

        beforeEach(async () => {
            const [deployer,feeCollector, addr1, addr2, addr3, addr4, addr5] = await ethers.getSigners();

            // Grab Contracts
            const contract = await ethers.getContractFactory("Contract1");

            // Deploy Contracts
            const instance = await contract.deploy();
        });


        it("should test a function and pass", async () => {
            // SETUP
            expected = "something";
            // EXECUTE

            // code to test function

            result = "something";
            // VERIFY
            assert.equal(expected, result);
        });
        it("should test a function and fail", async () => {
            // SETUP
            
            // EXECUTE

            // code to test function

            
            // VERIFY
            await expect("function that does something").to.be.reverted;
            // If you know the specific error then use .to.be.revertedWith("error message")
        });
    });
});