import React from 'react';
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
  return (
    <>
      <MainPromo />
      <Services />
      <WhatChallenges />
      <Steps />
      <Footer />
    </>
  );
}

export default Home;
