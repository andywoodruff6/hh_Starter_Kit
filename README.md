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
3) For the main branch RUN ``` git clone -b main https://github.com/andywoodruff6/hh_Starter_Kit.git ```
3) For the chainlink branch RUN ``` git clone -b main-plus-chainlink https://github.com/andywoodruff6/hh_Starter_Kit.git ```
4) RUN ``` cd hh_Starter_kit```
5) RUN ``` npm install --save "@openzeppelin/contracts" "@chainlink/contracts"```
6) RUN ```npm install --save-dev "hardhat@^2.6.5" "@nomiclabs/hardhat-waffle@^2.0.0" "ethereum-waffle@^3.0.0" "chai@^4.2.0" "@nomiclabs/hardhat-ethers@^2.0.0" "ethers@^5.0.0" "@nomiclabs/hardhat-etherscan@^2.1.3" "dotenv@^10.0.0" "eslint@^7.29.0" "eslint-config-prettier@^8.3.0" "eslint-config-standard@^16.0.3" "eslint-plugin-import@^2.23.4" "eslint-plugin-node@^11.1.0" "eslint-plugin-prettier@^3.4.0" "eslint-plugin-promise@^5.1.0" "hardhat-gas-reporter@^1.0.4" "prettier@^2.3.2" "prettier-plugin-solidity@^1.0.0-beta.13" "solhint@^3.3.6" "solidity-coverage@^0.7.16"```
8) OPTIONAL: If you are going to use Chainlink then RUN ```npm install --save dev "@chainlink/token" "@chainlink/contracts" "@appliedblockchain/chainlink-plugins-fund-link"```

## Hardhat shorthand
Check [hardhats website for updates](https://hardhat.org/guides/shorthand.html)

RUN ```npm i -g hardhat-shorthand``` You will need to open a new terminal for this to take effect.
I have found that this does not run in powershell

## Testing
```hardhat test```
