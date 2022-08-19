import Header from "../../components/Header";
import Promo from "../../components/Promo";

function Home() {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        <Promo />
      </main>
    </div>
  );
}

export default Home;
