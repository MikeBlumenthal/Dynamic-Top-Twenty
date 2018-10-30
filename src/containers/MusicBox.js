import React, {Component} from 'react';
import MusicList from '../components/MusicList.js';

class MusicBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {

    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then( (response) => {
      return response.json();
    })
    .then( (myJson) => {
      this.setState({data: myJson.feed.entry})
    });
  }

  render(){
    return(
      <div className="box">
        <h2>BOX</h2>
        <MusicList data={this.state.data}/>
      </div>
    )
  }
}

export default MusicBox;
