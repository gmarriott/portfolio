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
                    <img alt="arc" src="images/Arc-default.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Arc</h5>
                        <p>Production System</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
              </div>
              
              <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/Arc-default.jpg" style={{width:"100%"}} alt="arc" />
            <div className="description-box">
              <h4>Arc</h4>
              <p>While working at Twinkl, I was part of a small team in charge of optimising the production system.
                 This has lead to the creation of Arc, standing for Agile Resource Creation.
                  Arc was built from the ground up using React, Redux, MongoDB and PHP. Because of the sensitive nature of this
                  application as an internal system, no images can be provided.</p>
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
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt src="images/wip.png" style={{height:"315px"}} />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Projects In Development</h5>
                        <p>Upcoming Projects</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
              </div>
              
              <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/wip.png" style={{width:"100%"}} alt />
            <div className="description-box">
              <h4>Projects In Development</h4>
              <p>I'm currently working on two projects, both of which are being developed with technologies I have not previously worked with. One is a Laravel blog application which allows myself to post an image and description to the platform. The other is a Vue.js API service interacting with a Hearthstone API to serve game card details to the user. Both these projects can be previewed below.</p>
              <p>What George Saw (Laravel - Blog) : <a href="https://what-george-saw.herokuapp.com/" target="_blank">What George Saw</a></p>
              <p>Hearthstone Deck Viewer (Vue.js - API Service) : <a href="https://gmarriott.github.io/hearthstone-deck-viewer/" target="_blank">Hearthstone Deck Viewer</a></p>
              <span className="categories"><i className="fa fa-tag" />Project Development</span>
            </div>
            <div className="link-box">
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
              </div> {/* item end - 3 */}
            

          </div>
          </div>
        </div>
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}