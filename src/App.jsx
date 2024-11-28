import React from 'react';
import Hero from './sections/Hero/Hero';
import Partners from './sections/Partners/Partners';
import Offer from './sections/Offer/Offer';
import Superpower from './sections/Superpower/Superpower';
import Blog from './sections/Blog/Blog';

const App = () => {
  return (
    <div className='font-NormalFont overflow-x-hidden'>
        <Hero />
        <Partners />
        <Offer />
        <Superpower />
        <Blog />
    </div>
  );
};

export default App;