import { useState } from 'react';
import Loading from '../Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import AlbumCard from '../AlbumCard';
import './Search.css';

function Search() {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [executionState, setExecutionState] = useState('normal');
  const [resultSearch, setResultSearch] = useState<React.ReactNode | null>(null);

  function handleChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setDisabled(value.length < 2);
    setName(value);
  }

  async function handleClick() {
    setExecutionState('loading');
    const result = await searchAlbumsAPI(name);
    let resultSearchHtml;
    if (result.length) {
      resultSearchHtml = (
        <>
          <h2
            className="orange-panetone-bg padding-10 rounded"
          >
            { `Resultado de álbuns de: ${name}` }
          </h2>
          <div className="div-albums-cards">
            {
              result.map((album) => {
                return <AlbumCard key={ album.artworkUrl100 } album={ album } />;
              })
            }
          </div>
        </>
      );
    } else {
      resultSearchHtml = <p>Nenhum álbum foi encontrado</p>;
    }
    setName('');
    setResultSearch(resultSearchHtml);
    setExecutionState('finished');
  }

  return (
    <div className="div-search">
      <form
        className="rounded-square border-black container-bg form-search"
        onSubmit={ (event) => event.preventDefault() }
      >
        <input
          className="rounded button-label-bg padding-10"
          value={ name }
          onChange={ (event) => handleChange(event) }
          type="text"
          data-testid="search-artist-input"
        />
        <button
          className="rounded vertical-padding-30 padding-10"
          onClick={ handleClick }
          disabled={ disabled }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </form>
      { executionState === 'loading' ? <Loading /> : resultSearch }
    </div>
  );
}

export default Search;
