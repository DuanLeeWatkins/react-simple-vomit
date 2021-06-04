import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';
//Creates an App component
class App extends Component {
//Renders component to DOM
  render() {
    
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
