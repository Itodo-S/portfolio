import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Services />

      <Portfolio />

      <Contact />

      <Footer/>
    </div>
  );
}

export default App;
