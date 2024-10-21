import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* Contenu principal qui affichera les autres pages */}
      <Footer />
    </div>
  );
};

export default Layout;
