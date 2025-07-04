// src/Auth/LoginWidget.jsx

import { Navigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { SpinnerLoading } from '../layouts/Utils/SpinnerLoading';
import OktaSignInWidget from './OktaSignInWidget';

export const LoginWidget = ({ config }) => {
  const { oktaAuth, authState } = useOktaAuth();

  const onSuccess = (tokens) => {
    // Handle login redirect with Okta tokens
    oktaAuth.handleLoginRedirect(tokens);
  };

  const onError = (err) => {
    console.error('Sign in error:', err);
  };

  // Show loading spinner until authState is ready
  if (!authState) {
    return <SpinnerLoading />;
  }

  // If authenticated, redirect to home page
  return authState.isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <OktaSignInWidget
      config={{ ...config, useInteractionCodeFlow: false }} // Disable interaction code flow for Classic Engine
      onSuccess={onSuccess}
      onError={onError}
    />
  );
};
