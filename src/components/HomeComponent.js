import React, { Component } from 'react';
import '../App.css';
import {QNA} from '../shared/qna';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          qna: QNA
        };
      }
  
   
  render()
  {
    const q = this.state.qna.map((resource) => {
      return (
        <div className="container-fluid in" style={{height:'300px', marginBottom:'10px'}}>
            <div className="container-fluid le" style={{height:'300px', marginBottom:'10px',backgroundSize: 'cover', height: '100%',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundImage: `url(${resource.img})`}}>
            <div style={{position: 'relative', top: 130}}>
              <h1 class="la">{resource.ques}</h1>
              <p class="la">{resource.ans}</p>
            </div>
            </div> 
        </div>
      );
  });
    return (
    <div className="container-fluid">
      {q}
    </div>
  );}
}

export default Home;
