import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

export default class Header extends Component {

  render() {
    return (
      <React.Fragment>
      <header id="home">
        <div className="row banner">
        <h3 className="title"><Zoom cascade duration={4000}>George Marriott</Zoom></h3>
          <div className="banner-text">
            <h1 className="responsive-headline"><Zoom cascade duration={3000}><img className="profile-img" src="images/george-marriott.jpg"></img></Zoom></h1>
            <h3 className="intro-text">I'm an enthusiastic software developer with a keen interest in UX design and backend application structure. I am constantly looking to learn in the ever evolving world of software.</h3>
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/gmarriott94/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/gmarriott" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://twitter.com/its_just_george?lang=en-gb" target="_blank"><i className="fa fa-twitter" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>

      </header>
      </React.Fragment>
    );
  }
}