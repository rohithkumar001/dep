import React, { Component } from 'react';
import Header from './HeaderComponent';
import Help from './HelpComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  
    render()
    {
        const HomePage = () => {
            return(
                <Home 
                />
            );
          }
          const HelpPage = () => {
            return(
                <Help />
            );
        }
        const ContactPage = () => {
            return(
                <Contact />
            );
        }
      return (
      <div>
          <Header />
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/help' component={HelpPage} / >
              <Route path='/contactus' component={ContactPage} />
              <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );}
  }
  
  export default Main;
  