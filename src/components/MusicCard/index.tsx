import { useState } from 'react';
import { SongType } from '../../types';
import checkedHeart from '../../images/checked_heart.png';
import emptyHeart from '../../images/empty_heart.png';

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
    <>
      <label htmlFor={ idAudio }>
        { trackName }
        <audio
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
      </label>
      <label
        data-testid={ `checkbox-music-${trackId}` }
        htmlFor={ `checkbox-music-${trackId}` }
      >
        <input
          checked={ favorite }
          type="checkbox"
          name="favorite"
          id={ `checkbox-music-${trackId}` }
          onChange={ (event) => handleChange(event) }
        />
        <img src={ image } alt="favorite" />
      </label>
    </>
  );
}

export default MusicCard;
