import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Particles from './components/particles/particles';
import About from './components/about/about';
import Nav from './components/nav/nav';
import Testimonials from './components/testimonials/testimonials';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Projects from './components/projects/projects';

class App extends Component {
  render() {
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
        <Particles />
        <Header/>
        <About/>
        <Testimonials/>
        <Projects />
        <Contact />
        <Footer/>
        </div>
    );
  }
}

export default App;
