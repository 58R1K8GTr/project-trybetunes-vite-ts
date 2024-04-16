import { useState } from 'react';
import Loading from '../Loading';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import AlbumCard from '../AlbumCard';

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
          <h2>{ `Resultado de álbuns de: ${name}` }</h2>
          <div>
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

  const html = (
    <>
      <form
        onSubmit={ (event) => event.preventDefault() }
      >
        <input
          value={ name }
          onChange={ (event) => handleChange(event) }
          type="text"
          data-testid="search-artist-input"
        />
        <button
          onClick={ handleClick }
          disabled={ disabled }
          data-testid="search-artist-button"
        >
          Pesquisar
        </button>
      </form>
      { executionState === 'loading' && <Loading /> }
      { executionState === 'finished' && resultSearch }
    </>
  );

  return html;
}

export default Search;
