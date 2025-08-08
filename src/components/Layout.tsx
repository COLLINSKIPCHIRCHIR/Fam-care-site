import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      {/* Header */}
      <Navigation />

      {/* Main Content */}
      <main className='flex-1 px-4 sm:px-6 lg:px-8 py-6'>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout;