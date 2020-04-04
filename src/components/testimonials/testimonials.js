import React, { Component } from 'react';


export default class Testimonials extends Component {

  render() {
    return (
      <React.Fragment>
          
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Employer Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                <li>
                    <blockquote>
                      <p>Thanks so much for all your hard work on Arc. You've been there from the beginning always offering a different point of view and solving the problem at hand.
                      </p>
                      <cite>Ian Alexander - Twinkl - Arc Product Owner</cite>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>George is extremely passionate about the work he does and throughout
                        his time here at Kitlocker he has shown brilliant communication and development skills.
                      </p>
                      <cite>Mike Kent, Co-Founder - Kitlocker</cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>During his final year project George has shown an ability to effectively manage
                        his time to meet project deadlines while maintaining an outstanding quality of work.
                      </p>
                      <cite>Martin Cooper - Sheffield Hallam Tutor</cite>
                    </blockquote>
                  </li>
                </ul>
              </div> 
            </div>
          </div> 
        </div>  
      </section>
      </React.Fragment>
    );
  }
}