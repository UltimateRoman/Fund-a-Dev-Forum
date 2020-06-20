import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Web3 from 'web3';
import DPFforum from '../abis/DPFforum.json';
import Main from './Main'
import Navbar from './Navbar'
import Home from './Home'
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

  addProject(tag, description, image) {
    this.setState({ loading: true })
    this.state.dpf.methods.addProject(tag, description, image).send({ from: this.state.account }).once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()  
    })
  }

  fundProject(id, fundrec) {
    this.setState({ loading: true })
    this.state.dpf.methods.fundProject(id).send({ from: this.state.account, value: fundrec })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dpf: null,
      pCount: 0,
      projects: [],
      loading: true
    }
    this.addProject = this.addProject.bind(this)
    this.fundProject = this.fundProject.bind(this)
  }

  render() {
    return (
      <Router>   
        <Navbar />     
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" render={props => (
          <React.Fragment>
            { this.state.loading
            ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
            : <Main
              projects={this.state.projects}
              addProject={this.addProject}
              fundProject={this.fundProject}
            />
            }
          </React.Fragment>
        )} />
      </Router>
    );
  }
}

export default App;
