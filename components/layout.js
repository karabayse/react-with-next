import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>Bitcoin Exchange</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css"/>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
  </div>
);

export default Layout;
