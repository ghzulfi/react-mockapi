import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Section from "../components/Section";
import "../styles/style.css";

function Beranda() {
  return (
    <>
      <main className="container">
        <Navbar />
        <section className="section">
          <Section />
          <Card />
          <Newsletter />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Beranda;
