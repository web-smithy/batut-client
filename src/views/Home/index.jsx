import Header from "../../components/Header";
import Promo from "../../components/Promo";
import Features from "../../components/Features";

function Home() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <main className="main">
          <Promo />
        </main>
      </div>
      <Features />
    </>
  );
}

export default Home;
