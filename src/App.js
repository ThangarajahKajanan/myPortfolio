import './App.css';
import React, { useRef, useState, useEffect } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero'
import UpArrow from './components/UpArrow';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PreLoader from './components/PreLoader';

function App() {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true); // State for loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />; // Render PreLoader while loading
  }

  return (
    <div className='App'>    
        <Header
          heroRef={heroRef}
          aboutMeRef={aboutMeRef}
          portfolioRef={portfolioRef}
          skillsRef={skillsRef}
          contactRef={contactRef}
        />
      <UpArrow />
      <section ref={heroRef}>
        <Hero />
      </section>  
      <section ref={aboutMeRef}>
        <AboutMe />
      </section>
      <section ref={portfolioRef}>
        <Portfolio />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
        <Footer />    
    </div>
  );
}
export default App;
