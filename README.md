No permission is granted to use, modify or share this work for anyone other than the collaborators.

# Fund-a-Dev
An Ethereum based inclusive forum dApp for developers to promote and seek funds for their projects upholding diversity and quality.
</br>
Developers who are not able to find sufficient funds for their projects can post them with details in this forum anonymously. Other users can view the projects listed and fund the best ones.
</br></br>
Install truffle and ganache-cli
```
$ npm install -g truffle
$ npm install -g ganache-cli
```
You would also require a wallet like Metamask and set custom RPC to localhost:7545

```
$ git clone https://github.com/UltimateRoman/Ethereum-Track-Fund-a-Dev
$ cd Ethereum-Track-Fund-a-Dev
$ npm install
$ ganache-cli -p 7545
$ truffle migrate --reset
$ npm run start
```
