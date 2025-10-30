import { HashRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Contact,
  // Experience,z
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  // StarsCanvas,
} from "./components";
import { Footer } from "./Footer";
const App = () => {
  return (
    <HashRouter>
      <div className="page-shell max-w-screen overflow-hidden ">
        <div className="hero-orb" />
        <div className="hero-orb" />
        <div className="hero-orb" />

        <div className="relative z-10 flex min-h-screen flex-col max-w-screen overflow-hidden">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
            <Hero />
          </div>

          <main className="relative flex-1 pb-12">
            <About />
            <Tech />
            <Works />
            <Contact />
          </main>
        </div>

        <ToastContainer position="bottom-right" />
      </div>
      <Footer />
    </HashRouter>
  );
};

export default App;
