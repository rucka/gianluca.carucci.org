import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};
class Document extends NextDocument<Props> {
  render() {
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

export default Document;
