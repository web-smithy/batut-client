import Header from "../../components/Header";
import Promo from "../../components/Promo";
import Services from "../../components/Services";
import Banner from "../../components/Banner";

function Home() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <main className="main">
          <Promo />
          <Banner />
        </main>
      </div>
      <Services />
    </>
  );
}

export default Home;
