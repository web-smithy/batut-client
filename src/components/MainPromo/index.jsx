import React from 'react';
import Header from '../Header';
import Promo from '../Promo';
import AnimatedWave from '../AnimatedWave';

function MainPromo() {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        <Promo />
        <AnimatedWave />
      </main>
    </div>
  );
}

export default MainPromo;
