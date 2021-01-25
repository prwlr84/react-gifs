import React, { Component } from 'react';

class Gif extends Component {
  handleSelect = () => {
    this.props.id.sendData()
  }


  render(){
    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    return(
      <div className="gif">
        <img src={src} onClick={this.handleSelect()}/>
      </div>
    );
  }
}

export default Gif;
