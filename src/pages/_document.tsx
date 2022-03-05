import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    const page = this.props.__NEXT_DATA__.page;
    if (page === "/legacy") {
      return <LegacyDocument />;
    }
    return <GreenFieldDocument />;
  }
}

const GreenFieldDocument = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export const legacyRoot = "legacy/";
const LegacyDocument = () => {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        {/* <title>Gianluca Carucci - Software Engineer</title> */}

        <link
          rel="icon"
          href={`${legacyRoot}images/favicon.ico`}
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href={`${legacyRoot}images/favicon.ico`}
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href={`${legacyRoot}images/logo.png`} />

        <meta
          name="Description"
          content="My name is Gianluca Carucci, I am seasoned IT professionist with a degree in Computer Science and over 10 years experience in a wide variety of high availability and large scale systems. As appreciative of Agile methodologies I'm particulary focused on Scrum and Extreme Programming practices to continuosly increase customers' return of investement."
        />
        <meta
          name="Keyword"
          content="software engineer,html5,css3,carucci,agile,scrum,extreme programming,.net,c#,responsive design,nodejs,alm"
        />
        {/* <!--  <meta name="viewport" content="width=device-width; height=device-height;initial-scale=1.0; maximum-scale=1.0; user-scalable=no"/> --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:title"
          content="Gianluca Carucci Software Engineer website"
        />
        <meta
          property="og:image"
          content={`http://gianluca.carucci.org/${legacyRoot}images/logo.png`}
        />
        <meta property="og:url" content="http://gianluca.carucci.org" />
        <meta
          property="og:site_name"
          content="Gianluca Carucci Software Engineer website"
        />
        <meta
          property="og:description"
          content="My name is Gianluca Carucci, I am seasoned IT professionist with a degree in Computer Science and over 10 years experience in a wide variety of high availability and large scale systems. As appreciative of Agile methodologies I'm particularly focused on Scrum and Extreme Programming practices to continuously increase customers' return of investment."
        />

        {/* <!-- Twitter tags --> */}
        <meta
          name="twitter:card"
          content="Gianluca Carucci - Software Engineer"
        />
        <meta
          name="twitter:image"
          content={`http://test.carucci.org/${legacyRoot}images/logo.png`}
        />
        <meta name="twitter:site" content="@rucka" />
        <meta name="twitter:creator" content="@rucka" />

        <link
          href="http://fonts.googleapis.com/css?family=Varela+Round|Lobster+Two"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />

        <link
          href="http://fonts.googleapis.com/css?family=Oswald:400,300,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="http://fonts.googleapis.com/css?family=Dosis:400,300,200,500,600,700"
          rel="stylesheet"
          type="text/css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href={`${legacyRoot}css/reset.min.css`}
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={`${legacyRoot}css/main.min.css`}
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={`${legacyRoot}css/social.min.css`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
