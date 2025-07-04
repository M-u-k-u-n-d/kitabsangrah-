// src/Auth/RequireAuth.tsx
import { useOktaAuth } from "@okta/okta-react";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { oktaAuth, authState } = useOktaAuth();
  const location = useLocation();

  if (!authState) return null; // or a loading spinner

  if (!authState.isAuthenticated) {
    // Redirect to login
    oktaAuth.setOriginalUri(location.pathname);
    return <Navigate to="/login" />;
  }

  return children;
};
