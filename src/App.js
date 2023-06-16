import { useEffect } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Exercises from "./component/UL/Exercises";
import Footer from "./component/UL/Footer";
import Hero from "./component/UL/Hero";
import Pricing from "./component/UL/Pricing";
import Start from "./component/UL/Start";
import Testimonial from "./component/UL/Testimonials";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <h1>
    <Header />
    <Hero />
    <Exercises />
    <Start />
    <Pricing />
    <Testimonial />
    <Footer />
   </h1>;
}

export default App;
