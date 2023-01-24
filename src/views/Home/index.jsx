import React, { useRef } from 'react';
import AOS from 'aos';
import MainPromo from '../../components/MainPromo';
import Services from '../../components/Services';
import WhatChallenges from '../../components/WhatChallenges';
import Steps from '../../components/Steps';
import Footer from '../../components/Footer';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1200,
});

function Home() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const detailsRef = useRef(null);

  return (
    <>
      <MainPromo servicesRef={servicesRef} aboutRef={aboutRef} detailsRef={detailsRef} />
      <Services servicesRef={servicesRef} />
      <WhatChallenges aboutRef={aboutRef} />
      <Steps detailsRef={detailsRef} />
      <Footer />
    </>
  );
}

export default Home;
