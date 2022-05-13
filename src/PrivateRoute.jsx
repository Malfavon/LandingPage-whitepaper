import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const auth = false;
  return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;