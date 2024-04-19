import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading';
import './Login.css';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let html;

  function handleChange({ target: { value } }: React.ChangeEvent<HTMLInputElement>) {
    setDisabled(value.length < 3);
    setName(value);
  }

  async function handleClick() {
    setLoading(true);
    await createUser({ name });
    navigate('/search');
  }

  if (loading) {
    html = (<Loading />);
  } else {
    html = (
      <div className="div-main">
        <form
          className="form-login rounded-square border-black container-bg"
          onSubmit={ (event) => event.preventDefault() }
        >
          <h1>Bem vindo!</h1>
          <div
            className="login-container"
          >
            <label
              htmlFor="input-login"
              className="button-label-bg label-login rounded"
            >
              Usuário:
              <input
                id="input-login"
                className="padding-10 rounded-square input-login clearer border-black"
                onChange={ (event) => handleChange(event) }
                type="text"
                data-testid="login-name-input"
              />
            </label>
            <button
              className="border-black rounded vertical-padding-30 button-label-bg"
              disabled={ disabled }
              onClick={ handleClick }
              data-testid="login-submit-button"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    );
  }

  return html;
}

export default Login;
