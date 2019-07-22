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
                    <img alt src="images/Arc-default.jpg" />
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
            <img className="scale-with-grid" src="images/Arc-default.jpg" style={{width:"100%"}} alt />
            <div className="description-box">
              <h4>Arc</h4>
              <p>While working at Twinkl, I have been part of a small team in charge of optimising the production system.
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

          </div>
          </div>
        </div>
      </section> {/* Portfolio Section End*/}
      </React.Fragment>
    );
  }
}