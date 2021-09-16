import React, { Component } from 'react';
import '../App.css';
import {QNA} from '../shared/qna';
import { Media } from 'reactstrap';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          qna: QNA
        };
      }
      
   
  render()
  {
    const imgStyle = {
      maxHeight: 150,
      maxWidth: 200
    }
    const q = this.state.qna.map((resource) => {
      return (
        <div className="col-12 text-center mt-5">
        <Media tag="ul" className="row">
          <Media body className="ml-5 col-8">
          <Media heading>{resource.ques}</Media>
            <p>{resource.ans}</p>
          </Media>
          <Media  left middle className="col-4">
          <Media object src={resource.img} style={imgStyle} alt={resource.ques} />
            
          </Media>
        </Media>
        </div>
      );
  });
    return (
    <div className="container">
      {q}
    </div>
  );}
}

export default Home;
