import React from 'react';
import Hero from './sections/Hero/Hero';
import Partners from './sections/Partners/Partners';
import Offer from './sections/Offer/Offer';
import Superpower from './sections/Superpower/Superpower';
import Blog from './sections/Blog/Blog';
import Yourself from './sections/Yourself/Yourself';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import Headroom from 'react-headroom';

const App = () => {
  return (
    <div className='font-NormalFont overflow-x-hidden'>
      <Headroom className='z-20 relative'>
        <Header />
      </Headroom>
      <main className=''>
        <Hero />
        <Partners />
        <Offer />
        <Superpower />
        <Blog />
        <Yourself />
      </main>
      <Footer />
    </div>
  );
};

export default App;