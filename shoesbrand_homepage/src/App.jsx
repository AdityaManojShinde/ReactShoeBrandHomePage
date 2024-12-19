import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <div className="content">
        <header>
          <Navbar />
        </header>
        <main className="hero">
          <Hero />
        </main>
      </div>
    </>
  );
};

export default App;
