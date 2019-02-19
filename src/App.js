import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimeAgo, {Formatter} from 'react-timeago'
import Layout from './Layout'
import Content from './Content'


class App extends Component {

   
  render() {
    return(
    <div>
    <Layout>
      <Content />
    </Layout>
    </div>
    );
  }
}

export default App;
