import React, {Component} from 'react';
import MusicList from '../components/MusicList.js';

class MusicBox extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  render(){
    return(
      <div className="box">
        <h2>BOX</h2>
        <MusicList />
      </div>
    )
  }
}

export default MusicBox;
