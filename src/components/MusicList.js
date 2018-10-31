import React from 'react';
import MusicItem from './MusicItem.js';

const MusicList = ({data}) => {

  const songs = data.map( (song, index) => {
    return <MusicItem
      key={index}
      position={index+1}
      title={song["im:name"].label}
      artist={song["im:artist"].label}
      image={song["im:image"][1].label}
      link={song.link[1].attributes.href}
    />
  })

  return (
    <div className="list">
      {songs}
    </div>
  )
}

export default MusicList;
