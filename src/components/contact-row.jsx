import React, { Component } from 'react';
import { layouts } from '../stylesheets/layout.js';
import { designs } from '../stylesheets/design.js';

class ContactRow extends Component {

  render() {
    return (
      <div className="col-lg-12" style={designs.contactRow}>
      <div className="col-lg-8 m-auto text-center pt-5 pb-5">
        <ul className="pt-4 m-0 justify-content-center navbar no-dots">

          <li key="chat" className="col-lg-4 col-sm-12 mb-5 nav-item">
            <div className="mb-4 icon-height">
            <img src="https://a.icons8.com/iobQcnZV/g4rBxt/group-15.svg"

                 height="67"
                 alt="chat-icon"
                />
            </div>
            <div className="mb-4">
            <h4>Online chat with an audiologist</h4>
            <p> Mon to Fri from 9am - 7pm AEST </p>
            </div>
            <button className="btn text-white" style={designs.orangeButton}>Read more articles</button>
          </li>

          <li key="message" className="col-lg-4 col-sm-12 mb-5 nav-item">
            <div className="mb-4 icon-height">
            <img src="https://a.icons8.com/iobQcnZV/6aBRMp/email-85-copy.svg"

                 height="67"
                 width="85"
                 alt="message-icon"
                />
            </div>
            <div className="mb-4">
            <h4>Send us a message</h4>
            <p>Send us your questions or feedback</p>
            </div>
            <button className="btn text-white" style={designs.orangeButton}>Read more articles</button>
          </li>

          <li key="booking" className="col-lg-4 col-sm-12 mb-5  nav-item" >
            <div className="mb-4 icon-height">
            <img src="https://a.icons8.com/iobQcnZV/Uo06Rk/group.svg"

                 height="67"
                 alt="booking-icon"
                />
            </div>
            <div className="mb-4">
            <h4>Book a consultation</h4>
            <p>Advice over the phone, at a time you choose.</p>
            </div>
            <button className="btn text-white" style={designs.orangeButton}>Read more articles</button>
          </li>

        </ul>
      </div>
      </div>
    );
  }

}

export default ContactRow;
