import Header from "../../components/Header";
import Promo from "../../components/Promo";

function Home({ user, setUser }) {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main">
        <Promo user={user} setUser={setUser} />
      </main>
    </div>
  );
}

export default Home;
