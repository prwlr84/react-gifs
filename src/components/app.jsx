import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';
import giphy from 'giphy-api';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }

    this.search();
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  search = (query) => {
    const gf = giphy('uJ7509Ni4ahDVeVhg7BNP1IaZMAhX41O');
    gf.search({
      q: query,
      rating: 'r',
      limit: 10
      }, (err,res) => {
        this.setState({
          gifs: res.data
        });})
  }


  render() {
    return (
      <div>
        <div className="leftS">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="rightS">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
//§
