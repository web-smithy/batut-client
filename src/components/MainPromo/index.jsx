import React from 'react';
import Header from '../Header';
import Promo from '../Promo';
import AnimatedWave from '../AnimatedWave';

function MainPromo({ servicesRef, aboutRef, detailsRef }) {
  return (
    <div className="main-wrapper">
      <Header servicesRef={servicesRef} aboutRef={aboutRef} detailsRef={detailsRef} />
      <main className="main">
        <Promo />
        <AnimatedWave />
      </main>
    </div>
  );
}

export default MainPromo;
