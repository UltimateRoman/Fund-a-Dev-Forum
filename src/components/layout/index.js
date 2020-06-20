import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from '../footer/index'
import './index.css'


export default class  extends Component {
    render() {
        return (
            <div className="cont">
                <Navbar/>
            
               {
                   this.props.children
               } 
               
               <Footer/>
            

            </div>
        )
    }
}
