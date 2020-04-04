import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './header.scss';

export default class Header extends Component {

  render() {
    return (
      <React.Fragment>
      <header id="home">
        <div className="row banner">
        <h3 className="title"><Zoom cascade duration={4000}>George Marriott</Zoom></h3>
          <div className="banner-text">
            <h1 className="responsive-headline"><Fade cascade duration={2000}><img className="profile-img" src="images/george-marriott.jpg"></img></Fade></h1>
            <h3 className="intro-text">I'm a Sheffield based Software Developer currently specialising in React and PHP. I have a keen interest in UX design and backend web structure.</h3>
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