import { SongType } from '../../types';

function MusicCard({ info }: { info: SongType }) {
  const { trackId, trackName, previewUrl } = info;
  const idAudio = `${trackName}${trackId}`;

  return (
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
  );
}

export default MusicCard;
