import { useState } from "react";
import { CustomScroll } from "react-custom-scroll";
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Programs from './components/programs/Programs';
import Testimonial from './components/testimonial/Testimonial';
import Title from './components/Title/Title';
import VideoPlayer from "./components/videoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <CustomScroll>
      <Navbar />
      <div id="section1">
      <Hero />
      </div>
      
      <div id="section2">
        <Title title="Our Programs" subtitle="What we offer" />
        <Programs />
      </div>
      <div id="section3">

        <About setPlayState={setPlayState}/></div>
        <div id="section4">
        <Title title="Gallery" subtitle="Campus Photos" />
        <Campus /></div>
        <div id="section5">
        <Title title="TESTIMONIALS" subtitle="WHAT Patients SAY" />
        <Testimonial /></div>
        <div id="section6">
        <Title title="Contact us" subtitle="Get In Touch" />
        <Contact /></div>
        
        <Footer />
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </CustomScroll>
  );
}

export default App;
