import React from 'react';
import 'tachyons';
import './commonbody.css';
import anime from './anime_json.js';
import Card from './Card.js';

class BOOKS extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animes: anime.slice(30, 36)
    }
  }

  render() {
    const animeInfo = this.state.animes.map((anime, i) => {
      
      return <Card key={i} id={anime.anime} imageurl={anime.image} genre={anime.descreption}/>
    });

    return (
      <div className="body-grid">
        {animeInfo}
      </div>
    );
  }
}

export default BOOKS;