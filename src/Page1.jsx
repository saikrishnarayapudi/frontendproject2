import React, { Component } from 'react'
import {Link}from'react-router-dom';

export default class Page1 extends Component {
  render() {
    return (
      
      <div>
        <h1>page 1 jsx</h1>
         <Link to="/">path to home page</Link>

          <Link to="/Page2"><p>path to page 2</p></Link>
        </div>
    )
  }
}