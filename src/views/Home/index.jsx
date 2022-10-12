import Header from "../../components/Header";
import Promo from "../../components/Promo";
import Services from "../../components/Services";
import AnimatedWave from "../../components/AnimatedWave";
import WhatChallenges from "../../components/WhatChallenges";
import Steps from "../../components/Steps";
import Footer from "../../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

function Home() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <main className="main">
          <Promo />
          <AnimatedWave />
        </main>
      </div>
      <Services />
      <WhatChallenges />
      <Steps />
      <Footer />
    </>
  );
}

export default Home;
