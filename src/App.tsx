import React from 'react';
import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Nav from './components/nav/nav';
import {Testimonials} from './components/testimonials/testimonials';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';
import ParticlesLayout from './components/particles/particles';

//define App class
function App() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
      <Nav/>
        <ParticlesLayout/>
        <About/>
        <Intro />
        <Testimonials/>
        <Projects />
        <Contact />
        <Footer/>
        </div>
    );
}

export default App;
