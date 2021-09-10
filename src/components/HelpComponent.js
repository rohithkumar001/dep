import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {RESOURCES} from '../shared/resources'

class Help extends Component {
  constructor(props){
    super(props);
    this.state = {
      resources: RESOURCES
    };
  }

    render() {
        const imgStyle = {
            maxHeight: 200,
            maxWidth: 200
          }
        const help = this.state.resources.map((resource) => {
            return (
              <div key={resource.id} className="col-12 text-center mt-5">
                <Media tag="ul" className="row">
                  <Media left middle className="col-3">
                      <Media object src={resource.image} style={imgStyle} alt={resource.name} />
                  </Media>
                  <Media body className="ml-5 col-9">
                    <Media heading>{resource.name}</Media>
                    <a target= "__blank" href={`${resource.link}`}>{resource.description}</a>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {help}
              </Media>
            </div>
          </div>
        );
    }
}

export default Help;