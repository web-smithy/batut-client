import Header from "../../components/Header";
import Promo from "../../components/Promo";
import Services from "../../components/Services";
import Banner from "../../components/Banner";
import WhatChallenges from "../../components/WhatChallenges";

function Home() {
  return (
    <>
      <div className="main-wrapper">
        <Header isMenuShown />
        <main className="main">
          <Promo />
          <Banner />
        </main>
      </div>
      <Services />
      <WhatChallenges />
    </>
  );
}

export default Home;
