import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI';
import { UserType } from '../../types';
import Loading from '../Loading';

function Header() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    async function getUserAsync() {
      const userReceived = await getUser();
      setUser(userReceived);
      setLoading(false);
    }
    getUserAsync();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <header
      data-testid="header-component"
    >
      <NavLink
        to="/search"
        data-testid="link-to-search"
      >
        search
      </NavLink>
      <NavLink
        to="/favorites"
        data-testid="link-to-favorites"
      >
        favoritos
      </NavLink>
      <NavLink
        to="/profile"
        data-testid="link-to-profile"
      >
        profile
      </NavLink>
      <h3
        data-testid="header-user-name"
      >
        { user && user.name }
      </h3>
    </header>
  );
}

export default Header;
