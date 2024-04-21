import { useState } from 'react';
import { SongType } from '../../types';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';
import './MusicCard.css';

function MusicCard({ info }: { info: SongType }) {
  const { trackId, trackName, previewUrl } = info;
  const idAudio = `${trackName}${trackId}`;
  const [favorite, setFavorite] = useState(false);
  const [image, setImage] = useState<string>(emptyHeart);

  function handleChange({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) {
    setFavorite(checked);
    if (checked) {
      setImage(checkedHeart);
    } else {
      setImage(emptyHeart);
    }
  }

  return (
    <div
      className="music-card border-black rounded-square container-bg"
    >
      <p>{ trackName }</p>
      <audio
        className="audio"
        id={ idAudio }
        data-testid="audio-component"
        src={ previewUrl }
        controls
      >
        <track kind="captions" />
        O seu navegador não suporta o elemento
        {' '}
        <code>audio</code>
        .
      </audio>
      <label
        data-testid={ `checkbox-music-${trackId}` }
        htmlFor={ `checkbox-music-${trackId}` }
      >
        <input
          className="without-display"
          checked={ favorite }
          type="checkbox"
          name="favorite"
          id={ `checkbox-music-${trackId}` }
          onChange={ (event) => handleChange(event) }
        />
        <img src={ image } alt="favorite" />
      </label>
    </div>
  );
}

export default MusicCard;
