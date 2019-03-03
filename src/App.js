import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeAgo, {Formatter} from 'react-timeago'
import Layout from './Components/Layout'
import Content from './Components/Content'


class App extends Component {

   
  render() {
    return(
    <div>
    <Layout />
    </div>
    );
  }
}

export default App;
