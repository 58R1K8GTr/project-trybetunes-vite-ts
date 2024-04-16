import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import MusicCard from '../MusicCard';
import { AlbumType, SongType } from '../../types';
import Loading from '../Loading';

function Album() {
  const { id } = useParams();
  const [musics, setMusics] = useState<{ album: AlbumType, songs: SongType[] }>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMusicsAsync() {
      if (id) {
        const [album, ...songs] = await getMusics(id);
        console.log(album, songs);
        setMusics({ album, songs });
        setLoading(false);
      }
    }
    getMusicsAsync();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!musics?.album) {
    return (
      <>
        <h2>Album não existe</h2>
        <Link to="/search">Voltar para a página inicial</Link>
      </>
    );
  }
  return (
    <>
      <h2 data-testid="album-name">
        { musics?.album.collectionName }
      </h2>
      <p data-testid="artist-name">
        { musics?.album.artistName }
      </p>
      {
        musics?.songs && musics.songs
          .map(({ trackId, trackName, previewUrl }) => {
            const newObject = { trackId, trackName, previewUrl };
            return <MusicCard key={ trackId } info={ newObject } />;
          })
      }
    </>
  );
}

export default Album;
