import React from 'react';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'The JCM Text to Speech service is used to generate consistent audio files easily for PBX greetings and IVR recordings. Firefox or Chrome browsers should be used for full capabilities.';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>JCM Text to Speech</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="JCM Text to Speech" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />

        {/* Bluemix Analytics - begin*/}
        <script type="text/javascript">{`
          window._analytics = { coremetrics: false, optimizely: false, addRoll: false };
        `}</script>
        <meta name="segment" property="watson-demos" value="text-to-speech-demo" />
        <script src={props.bluemixAnalytics} />
        {/* Bluemix Analytics  - end*/}

      </head>
      <body>
        <Header
          mainBreadcrumbs="Text to Speech"
          mainBreadcrumbsUrl="http://www.ibm.com/watson/developercloud/text-to-speech.html"
          subBreadcrumbs="Text to Speech Demo"
          subBreadcrumbsUrl="https://text-to-speech-demo.mybluemix.net"
        />
        <Jumbotron
          serviceName="JCM Text to Speech Generator"
          repository="https://github.com/carlwest/jcm-tts"
          documentation="https://www.ibm.com/watson/developercloud/doc/text-to-speech/index.html"
          apiReference="http://www.ibm.com/watson/developercloud/text-to-speech/api/v1/"
          startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/text-to-speech/"
          version="GA" serviceIcon="/images/service-icon.svg"
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="js/ga.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
  bluemixAnalytics: React.PropTypes.string,
};

export default Layout;
