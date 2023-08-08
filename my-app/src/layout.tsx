import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <WhatsAppButton />
    </div>
  );
}

export default Layout;
