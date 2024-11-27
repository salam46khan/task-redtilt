import React from 'react';
import Hero from './sections/Hero/Hero';
import Partners from './sections/Partners/Partners';
import Offer from './sections/Offer/Offer';

const App = () => {
  return (
    <div className='font-NormalFont overflow-x-hidden'>
        <Hero />
        <Partners />
        <Offer />
    </div>
  );
};

export default App;