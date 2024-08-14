import Document, { Html, NextScript, Head, Main } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/*Favicon*/}
                    <link rel="icon" href="/favicon/icon.ico"/>
                </Head>
                <body className="custom-class">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;