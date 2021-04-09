import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth/context';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
