import React, { Component } from 'react';


export default class Footer extends Component {

  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.linkedin.com/in/gmarriott94/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/gmarriott" target="_blank"><i className="fa fa-github" /></a></li>
              <li><a href="https://twitter.com/its_just_george?lang=en-gb" target="_blank"><i className="fa fa-twitter" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2022 - George Marriott | Web Design</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer> {/* Footer End*/}
      </React.Fragment>
    );
  }
}