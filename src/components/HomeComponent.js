import React, { Component } from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Help from './HelpComponent';

class Home extends Component {
  
  render()
  {
    return (
    <div>
        <Header />
        <Help />
        <Footer />
    </div>
  );}
}

export default Home;
