import React, { Component } from 'react'
import {Link}from'react-router-dom';
import './css/Page2.css'


export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <p>this is page 2 fe</p>
        <div id='text1'>
          <h3>underlining in html</h3>
        </div>
        <Link to="/Page1"><p>path to page 1</p></Link>

        <div className='link2'>
         <Link to="/">path to home page</Link>
        </div>

       </div>

    )
  }
}
