import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
class Header extends Component {
  render() {
    return(
        <React.Fragment>
       <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Mental Wellbeing</NavbarBrand>
          </div>
        </Navbar>
        <div class="p-5 mb-4 jumbotron">
        <div class="container-fluid py-5">
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Mental Wellbeing</h1>
                       <p>We take inspiration from Mental health workers!</p>
                   </div>
               </div>
           </div>
       </div>
       </div>
    </React.Fragment>
    );
  }
}

export default Header;