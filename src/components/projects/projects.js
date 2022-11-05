import React, { Component } from 'react';


export default class Projects extends Component {

  render() {
    return (
      <React.Fragment>

      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="arc" style={{height:"315px"}} src="images/tutorful-landing-page.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Tutorful - Landing Experience</h5>
                        <p>Software Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
              </div>

              <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/tutorful-landing-page.png" style={{width:"100%"}} alt="arc" />
            <div className="description-box">
              <h4>Tutorful Landing Experience</h4>
              <p>While working at Tutorful, I was part of a small team tasked with optimising the landing page for the potential students to the platform. This involved rebuilding the existing landing page using Vue and Typescript to make the experience as smooth as possible. We also used Lighthouse whilst we rebuilt the page to ensure that we had optimised performance, accessibility and user experience stats for modern day browsers. Check out the landing page experience at: <a href="https://tutorful.co.uk/search/maths" target="_blank">Tutorful - Landing Page</a> </p>
              <span className="categories"><i className="fa fa-tag" />Software Development</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="spacex-viewer" src="images/spacex-viewer.png" style={{height:"315px"}} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>SpaceX Launch Viewer</h5>
                        <p>React/Typescript API Project</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
              </div>

              <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/spacex-viewer.png" style={{width:"100%"}} alt />
            <div className="description-box">
              <h4>SpaceX Launch Viewer</h4>
              <p>I started the SpaceX launch viewer project to refine my knowledge of React and Typescript. Using the open source SpaceX API was enjoyable and I managed to develop a satisfying list of launches with filter and sort functionality. I have deployed the project to GitHub pages and you will be able to access it by using the following link: <a href="https://gmarriott.github.io/space-x-launch-viewer/" target="_blank">SpaceX Launch Viewer</a></p>
              <span className="categories"><i className="fa fa-tag" />API Development</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
              </div> {/* item end */}

              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="truck-run" src="images/truck-run.png" style={{height:"315px"}} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Truck Run</h5>
                        <p>HTML Game</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
              </div>

              <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/truck-run.png" style={{width:"100%"}} alt />
            <div className="description-box">
              <h4>Truck Run</h4>
              <p>This project was made while I was studying at Sheffield Hallam University as part of a 30 day Javascript challenge. On one of the days we were tasked with using JS alongside HTML canvas to create a game. I wanted to replicate the 2D side scrolling games I played when I was younger. Truck Run was my submission for the challenge and is just a simple 2D scroller where you drive a truck and try to get as far as possible without crashing. I have since deployed the game to GitHub pages and you will be able to access it by using the following link: <a href="https://gmarriott.github.io/truck-run/" target="_blank">Truck Run</a></p>
              <span className="categories"><i className="fa fa-tag" />Game Development</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}
              </div> {/* item end */}


              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt src="images/gmarriott-VR.PNG" style={{height:"315px"}} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Developer Demand</h5>
                        <p>VR - Data Visualization</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
              </div>

            <div id="modal-02" className="popup-modal mfp-hide">
              <img className="scale-with-grid" src="images/gmarriott-VR.PNG" style={{width:"100%"}} alt />
                <div className="description-box">
                  <h4>VR - Learning the basics</h4>
                  <p>After being gifted a Google Daydream View from a fellow developer I was excited by the possibilities of VR and how to develop for the platform. I have currently developed a view where data for developer demand
                  can be displayed. Although some bugs still need to be fixed, it has been a valuable project for understanding the basics
                  of VR development. For this project I utilised Javascript alongside A-Frame. A preview of the application can be found
                  here: <a href="https://gmarriott.github.io/vr-uk-visualization/" target="_blank">VR - Data Visualization</a>
                    </p>
                <span className="categories"><i className="fa fa-tag" />VR Development</span>
              </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
                </div>
              </div>
            </div>
            {/* item end */}
            {/* modal end of 2 */}
          </div>
          </div>
        </div>
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}