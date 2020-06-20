import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <h1>DPF</h1>
            <Link to="/projects">Projects</Link>
            <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-secondary">
                <small id="account">{this.props.account}</small>
              </small>
            </li>
            </ul>
          </nav>
        );
    }
}

export default Navbar;