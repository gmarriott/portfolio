import React, { Component } from 'react';
import { MdMailOutline } from "react-icons/md";

export default class Contact extends Component {

  render() {
    return (
      <React.Fragment>

      <section id="contact">
        <div className="ContactContainer">
            <h5 className="contact-header">Contact Me</h5>
        </div>
        <div className="row">
          <div className="twelve columns">
            {/* form */}
            <form action="https://formspree.io/f/xknpqwww" method="POST">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" defaultValue="" size={35} id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" defaultValue="" size={35} id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" defaultValue="" size={35} id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={40} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <button className="submit">Submit <MdMailOutline style={{fontSize: "12px"}}/></button>
                  <span id="image-loader">
                    <img alt src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form> {/* Form End */}
            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
        </div>
      </section> {/* Contact Section End*/}
      </React.Fragment>
    );
  }
}