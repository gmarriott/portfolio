import React, { Component } from 'react';


export default class Nav extends Component {

  render() {
    return (
      <React.Fragment>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li><a href="#about">Home</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#portfolio">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
      </React.Fragment>
    );
  }
}