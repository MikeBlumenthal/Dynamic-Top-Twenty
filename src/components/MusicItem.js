import React from 'react';

const MusicItem = ({position, artist, title, link, image}) => {
  return (
    <div className="item">
      <h2 className="position">#{position}</h2>
      <p>
        <a href={link}>
          <img src={image} alt="record-cover" />
        </a>
        {title}
      </p>
      <p>
        {artist}
      </p>
    </div>
  )
}

export default MusicItem;
