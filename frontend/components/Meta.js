import Head from "next/head";

const Meta = () => (
  <Head>
    {/* responsive */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf=8" />

    {/* favicon */}
    <link rel="shortcut icon" href="/static/favicon.png" />

    {/* red bar under the selected nav tab */}
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />

    {/* default title in Chrome tab */}
    <title>Sick Fits!</title>
  </Head>
);

export default Meta;
