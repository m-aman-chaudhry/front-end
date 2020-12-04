import React from 'react';
import 'tachyons';
import './commonbody.css';
import anime from './anime_json.js';
import Card from './Card.js';

class Anime extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      animes: anime.slice(0, 6)
    }
  }

  render() {
    const animeInfo = this.state.animes.map((anime, i) => {
      
      return <Card key={i} animedata={this.props.animedata} data={anime} id={anime.anime} imageurl={anime.image} genre={anime.descreption}/>
    });

    return (
      <div className="body-grid">
        {animeInfo}
      </div>
    );
  }
}

export default Anime;