# Hardhat Starter Kit
#### By: TNB

This starter kit for hardhat projects has additional boilerplate code to aid in quick development

## Getting Started
This kit has different branches. Pull the branch you need for your project.

- Main: Basic Hardhat
- Main plus ChainLink: has the main branch plus the code for a chain link project.

## Installation Instructions

1) Create a directory on your pc
2) RUN ``` git init ```
3) RUN ``` git clone https://github.com/andywoodruff6/hh_Starter_Kit.git ```
4) RUN ``` cd hh_Start_kit```
5) RUN ``` npm install --save dev @openzeppelin/contracts ```
6) RUN ```npm install --save dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-web3 web3```
7) RUN ``` npm install --save dev @nomiclabs/hardhat-etherscan solidity-coverage hardhat-gas-reporter hardhat-deploy```
8) OPTIONAL: If you are going to use Chainlink then RUN ```npm install --save dev @chainlink/token @chainlink/contracts @appliedblockchain/chainlink-plugins-fund-link```

## Hardhat shorthand
Check [hardhats website for updates](https://hardhat.org/guides/shorthand.html)

RUN ```npm i -g hardhat-shorthand``` You will need to open a new terminal for this to take effect.
I have found that this does not run in powershell

## Testing
```hardhat test```
