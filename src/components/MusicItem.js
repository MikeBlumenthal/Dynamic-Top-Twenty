import React from 'react';

const MusicItem = ({position, artist, title, image}) => {
  return (
    <div className="item">
      <h2 className="position">#{position}</h2>
      <p>
        <img src={image} alt="record-cover" />
        {title}
      </p>
      <p>
        {artist}
      </p>
    </div>
  )
}

export default MusicItem;
