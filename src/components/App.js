import React, { Component } from 'react';
import Web3 from 'web3';
import DPFforum from '../abis/DPFforum.json';
import './App.css';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should use the MetaMask extension!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = DPFforum.networks[networkId]
    if(networkData) {
      const dpf = web3.eth.Contract(DPFforum.abi, networkData.address)
      this.setState({ dpf })
      const pCount = await dpf.methods.pCount().call()
      this.setState({ dpf })
      for (var i = 1; i <= pCount; i++) {
        const project = await dpf.methods.projects(i).call()
        this.setState({
          projects: [...this.state.projects, project]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('The forum contract could not be deployed to network')
    }
  }


  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
