import React, { Component } from 'react';

class Gif extends Component {
  handleSelect = () => {
     if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }


  render(){
    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return(
        <img src={src} className="gif" onClick={this.handleSelect} />
    );
  }
}

export default Gif;
