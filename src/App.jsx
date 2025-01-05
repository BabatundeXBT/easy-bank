import "./App.css";
import Hero from "./assets/Hero";
import Article from "./components/Article";
import Banking from "./components/Banking";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Banking />
      <Article />
      <Footer />
    </>
  );
}

export default App;
