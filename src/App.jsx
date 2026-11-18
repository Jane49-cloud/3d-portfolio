import { About, Contact, Hero, Navbar, Tech, WorkHistory, Works } from "./components";
import { Footer } from "./Footer";

const App = () => (
  <div className="site-shell">
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <Works />
      <WorkHistory />
      <About />
      <Tech />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
