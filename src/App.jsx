import { BrowserRouter, HashRouter } from "react-router-dom";
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
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bng-contain bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className=" md:mt-2 mt-[200px]">
          <About />
        </div>
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative  z-0"></div>
        <Contact />
        {/* <StarsCanvas /> */}
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </HashRouter>
  );
};

export default App;
