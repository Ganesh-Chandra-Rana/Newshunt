
import './App.css';
import Nav from './component/nav';
import News from './component/news';
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <News/>
        
      </div>
    )
  }
}



