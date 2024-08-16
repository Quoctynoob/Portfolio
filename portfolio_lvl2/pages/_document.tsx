// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            {/*Favicon*/}
            <link rel="icon" href="/favicon/icon.ico"/>

            {/* Preconnect to Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            {/* Link to the Pacifico font */}
            <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&family=Londrina+Sketch&family=Pacifico&family=Train+One&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;