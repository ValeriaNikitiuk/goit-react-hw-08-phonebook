import { useAuth } from '../../shared/hooks/useAuth';
import { Link } from 'react-router-dom';

export const Navigator = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};
