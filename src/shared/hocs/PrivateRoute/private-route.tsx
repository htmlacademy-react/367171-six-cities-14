import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthStatus, RoutePath } from '../../../routes/routes';

export type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: ReactNode;
}


export function PrivateRoute({authStatus, children}: PrivateRouteProps): ReactNode {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={RoutePath.login} />
  );
}
