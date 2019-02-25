import React, {Component} from 'react';

class Film extends Component{
  render(){
    return(
      <div className="film">
        <p>{this.props.title}</p>
        <a href={this.props.url}>IMDB Page</a>
      </div>
    )
  }
}

export default Film;
