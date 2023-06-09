import { BrowserRouter, HashRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
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
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative  z-0"></div>
        <Contact />
        {/* <StarsCanvas /> */}
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
