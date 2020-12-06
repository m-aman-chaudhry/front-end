import React from 'react';
import 'tachyons';
import './commonbody.css';
import anime from './other_json.js';
import Card1 from './Card1.js';

class WEBSERIES extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animes: anime.slice(18, 24)
    }
  }

  render() {
    const animeInfo = this.state.animes.map((anime, i) => {
      
      return <Card1 key={i} animedata={this.props.animedata} data={anime} id={anime.anime} imageurl={anime.image} genre={anime.descreption}/>
    });

    return (
      <div className="body-grid">
        {animeInfo}
      </div>
    );
  }
}

export default WEBSERIES;