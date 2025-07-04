import { useEffect, useRef } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";


import { oktaConfig } from '../lib/oktaConfig';

const OktaSignInWidget = ({ onSuccess, onError }) => {
    const widgetRef = useRef(null);

    useEffect(() => {

        if (!widgetRef.current) {
            return false;
        }

        const widget = new OktaSignIn(oktaConfig);

        widget.showSignInToGetTokens({
            el: widgetRef.current,
        }).then(onSuccess).catch(onError);

        return () => widget.remove();
    }, [onSuccess, onError]);

    return (
        <div className='container mt-5 mb-5'>
            <div ref={widgetRef}></div>
        </div>
    );
};

export default OktaSignInWidget

// import { useEffect, useRef } from 'react';
// import OktaSignIn from '@okta/okta-signin-widget';
// import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

// import { oktaConfig } from '../lib/oktaConfig';

// const OktaSignInWidget = ({ onSuccess, onError }) => {
//   const widgetRef = useRef(null);

//   useEffect(() => {
//     if (!widgetRef.current) return;

//     const widget = new OktaSignIn({
//       baseUrl: oktaConfig.issuer.split('/oauth2')[0],
//       clientId: oktaConfig.clientId,
//       redirectUri: oktaConfig.redirectUri,
//       logo: '/logo.png', // optional - replace or remove
//       i18n: {
//         en: {
//           'primaryauth.title': 'Sign in to KitabSangrah',
//         },
//       },
//       features: {
//         registration: false,
//         rememberMe: true,
//         multiOptionalFactorEnroll: true,
//         selfServicePasswordReset: true, // ✅ enables "Forgot password?"
//       },
//       authParams: {
//         pkce: true,
//         issuer: oktaConfig.issuer,
//         scopes: oktaConfig.scopes,
//       },
//     });

//     widget.renderEl(
//       { el: widgetRef.current },
//       onSuccess,
//       onError
//     );

//     return () => widget.remove();
//   }, [onSuccess, onError]);

//   return (
//     <div className="container mt-5 mb-5">
//       <div ref={widgetRef}></div>
//     </div>
//   );
// };

// export default OktaSignInWidget;
