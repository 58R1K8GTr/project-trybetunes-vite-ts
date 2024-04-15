import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import Loading from '../Loading';

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
      <form
        className="login-container"
        onSubmit={ (event) => event.preventDefault() }
      >
        <input
          onChange={ (event) => handleChange(event) }
          type="text"
          data-testid="login-name-input"
        />
        <button
          disabled={ disabled }
          onClick={ handleClick }
          data-testid="login-submit-button"
        >
          Entrar
        </button>
      </form>
    );
  }

  return html;
}

export default Login;
