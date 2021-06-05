No permission is hereby granted to reproduce, modify or share this work.

# Fund-a-Dev Forum

An Ethereum based inclusive forum dApp for developers to showcase, promote and seek funds for their projects, upholding diversity and quality and eliminating discrimination.

</br>

Tech communities are becoming increasingly inclusive day-by-day thus promoting diversity in tech. But in certain cases not all developers get equal support or funding for their projects either because there are chances of discrimination based on aspects of their personal identity like gender, nationality, age etc or due to lack of a platform for them to promote their projects . The best projects or ideas don't always get the support they deserve due to this reason. Fund-a-Dev is specifically designed to tackle this problem. It provides a blockchain based platform for developers to showcase their projects and request funding conveniently. Other users can transfer funds in ETH to support projects they would like to. It also ensures sufficient privacy of the developer by identifying them using an anonymous address only. Thus it upholds and maintains diversity among developers, ensures quality of projects being supported and makes project funding credible by avoiding intermediaries.

</br>

## Install truffle and ganache-cli

```
$ npm install -g truffle
$ npm install -g ganache-cli
```
You would also require an Ethereum wallet like [Metamask](https://metamask.io) and set custom RPC to localhost:7545

## Clone and Run the DApp

```
$ git clone https://github.com/UltimateRoman/Ethereum-Track-Fund-a-Dev
$ cd Ethereum-Track-Fund-a-Dev
$ npm install
$ ganache-cli -p 7545
$ truffle migrate --reset
$ npm start
```
