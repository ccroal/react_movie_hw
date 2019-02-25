import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{
  render(){

    const filmNodes = this.props.data.map(film => {
      return <Film key={film.id} title={film.name} url={film.url}></Film>
    })


    return(
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }

}

export default FilmList;
