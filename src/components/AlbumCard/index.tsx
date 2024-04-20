import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';
import './AlbumCard.css';

function AlbumCard({ album }: { album: AlbumType }) {
  const { collectionId, collectionName, artworkUrl100 } = album;
  return (
    <div
      className="div-album-card container-bg rounded-square"
    >
      <Link
        className="link"
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <img
          className="img-album-card padding-10 border-black rounded-square"
          src={ artworkUrl100 }
          alt="Imagem do album"
        />
        { collectionName }
      </Link>
    </div>
  );
}

export default AlbumCard;
