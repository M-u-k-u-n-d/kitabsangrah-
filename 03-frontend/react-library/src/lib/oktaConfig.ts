export const oktaConfig = {
    clientId: '0oapdiplktcDIpv365d7',
    issuer: 'https://dev-24749289.okta.com/oauth2/default',
    redirectUri: 'http://localhost:5173/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
    useInteractionCodeFlow: false,
}


