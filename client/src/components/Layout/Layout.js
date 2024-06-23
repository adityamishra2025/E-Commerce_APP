import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
      {/* making dynamic app */}
      <Helmet>
          <meta charSet="utf-8" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
          <title>{title}</title>
      </Helmet>

      <Header/>

      <main style={{minHeight: '70vh'}}>
        <Toaster />
        {children}
      </main>

      <Footer/>
    </div>
  )
};

Layout.defaultProps = {
  title: 'Arrow Cart - Shop Now',
  description: 'MERN App',
  keywords: 'MongoDB, Express, Node.js, React JS',
  author: 'Aditya Mishra'
}

export default Layout
