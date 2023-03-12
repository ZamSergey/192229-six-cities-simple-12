import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}

export default PrivateRoute;
