import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';

function CardAlbum({ album }: { album: AlbumType }) {
  const { collectionId, collectionName, artworkUrl100 } = album;
  return (
    <div>
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img src={ artworkUrl100 } alt="Imagem do album" />
        { collectionName }
      </Link>
    </div>
  );
}

export default CardAlbum;
