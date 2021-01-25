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
      selectedGifId: null
    }

    this.search();
    this.selectGif();
  }

  selectGif = (event) => {

  }

  search = (query) => {
    const gf = giphy('uJ7509Ni4ahDVeVhg7BNP1IaZMAhX41O');
    gf.search({
      q: query,
      rating: 'r',
      limit: 10
      }, (err,res) => {
        console.log(res);
        this.setState({
          gifs: res.data
        });})
  }


  render() {
    const gifs = [];
    return (
      <div>
        <div className="leftS">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="rightS">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}

export default App;
//§
