import React, { Component } from 'react';
import { layouts } from '../stylesheets/layout.js';
import { designs } from '../stylesheets/design.js';
import { customs } from '../stylesheets/styleVariables.js';
import { getContactDescriptions } from '../textHolder.js';
import { FaHeadphones } from 'react-icons/fa';

class HearingTest extends Component {
  state = {
    headerTitles: ['Hearing is vital to everday life, yet it can change over time.',
    'Join the community' ],
    descriptions: []
  }

  componentDidMount(){
    const descriptions = getContactDescriptions();

    this.setState({ descriptions })
  }

  render() {
    const { headerTitles, descriptions } = this.state;
    const { BluGradint_H0 } = customs.colours;
    return (
      <div className="col-lg-12 p-0">
          <div className="col-lg-12  d-sm-none d-none d-md-block p-0">
          {/* The top row of the two with the white bg */}
          <div className="col-lg-9 m-auto hearing-test-padding">
            <div className="col-md-6 d-inline-block align-top p-0">
              <div className="col-md-10 d-flex justify-content-center navbar p-0">
              <h1 className="mb-5">
                { headerTitles[0] }
              </h1>
              <p className="mb-5">
                {descriptions[0]}
                <br></br>
                <br></br>
                {descriptions[1]}
              </p>
              <button className="btn text-white" style={designs.orangeButton}>
                  <FaHeadphones />Online Hearing Test
              </button>
            </div>
            </div>
            <div className="col-md-6 d-inline-block p-0 text-right">
              <img src="https://a.icons8.com/iobQcnZV/JJHkZO/group-12.png"
                   alt="father-son-walking-on-beach"
                   width="630"
                   height="390"
                   style={{width: "-webkit-fill-available", height: "auto"}}
                 />
            </div>
          </div>

        <div className="col-lg-12" style={{background: customs.colours.BluGradint_H90}}>
          <div className="col-lg-9 m-auto" style={{padding: "70px 0px 70px 0px"}}>
            {/* The bottom row of the two with the blue bg gradient */}
          <div className="col-lg-5 col-md-4 text-white">
            <img src="https://a.icons8.com/cZRbokcY/OP2REe/logo-hearinghelp.svg"
                 className="mb-4" wdith="186.5" alt="hearingHelp-logo"/>
            <p className="mb-4">
              Our Hearing specialists are ready when you are. Call or chat today.
            </p>
            <ul className="navbar mb-4 no-dots p-0">
              <li key="contact-number">
                <button className="btn "
                        style={designs.orangeButton}
                        >
                        Online Hearing Test</button>
              </li>
              <li key="hearing-test">
                <button className="btn "
                        style={designs.orangeButton}
                        >
                        Online Hearing Test</button>
              </li>
            </ul>
            <p className="mt-5">
              <span className="mr-3">Initiative of</span>
              <img src="https://a.icons8.com/iobQcnZV/6YBYw4/ah-logo-white.svg"
                   alt="Aus hearing icon"
                   width=""
                   className="mr-4"
                   />
              <img src="https://a.icons8.com/cZRbokcY/c1lVMC/nal-logo-copy.svg"
                   wdith="186.5" alt="native-logo"/>
            </p>
          </div>
              {/*contact form*/}
              <div className="col-lg-5 col-md-4 boxShadow position-absolute p-5 bg-white"
                    style={designs.contactBox}>
                <h1> { headerTitles[1] } </h1>
                <p className="mb-4">
                  We'll send you new info and tips. You can cancel at any time.
                </p>
                <input className="InputContactBorder col-lg-7 mb-4 d-block"
                       placeholder="Your Name">
                </input>
                <input className="InputContactBorder col-lg-7 mb-4 d-block"
                        placeholder="Your Email"
                ></input>
                <p className="mb-5">By subscribing you agree to our Privacy Policy and
                Terms and Conditions.</p>
                <button className="btn col-sm-4"
                        style={designs.orangeButtonSmall}
                        >
                        Read more
                </button>
              </div>
          </div>
          </div>
        </div>
        <div className="d-lg-none d-md-none">
          <section>
            <div style={designs.beachBackground}></div>
            <article className="col-9 m-auto pt-5 text-center">
              <h5>{ headerTitles[0] }</h5>
              <p>
                {descriptions[0]}
                <br></br>
                <br></br>
                {descriptions[1]}
              </p>
            </article>
          </section>
          <section
            className="col-12 m-auto"
            style={{background: BluGradint_H0}}
            >
            <div className="col-11 m-auto pt-5 text-center text-white">
            <img src="https://a.icons8.com/cZRbokcY/OP2REe/logo-hearinghelp.svg"
                  alt="hearing-help-logo" width="150px"
                  className="mb-4"
                  />
            <p>
              Our Hearing specialists are ready when you are. Call or chat today.
            </p>
            <ul className="d-inline navbar no-dots text-center">
              <li key="contact-number">
                <button className="btn"
                        style={designs.orangeButton}
                >
                1800 740 301</button>
              </li>
              <li key="hearing-test">
                <button className="btn mt-4"
                        style={designs.orangeButton}
                >Online Hearing Test</button>
              </li>
            </ul>
            <p> Initiative of
            <br></br>
              <img src="https://a.icons8.com/iobQcnZV/6YBYw4/ah-logo-white.svg"
                   width="100"/>
            </p>
            {/*contact form*/}
            <section className="bg-white text-dark pt-4 p-3"
                     style={designs.contactBoxSmall}
            >
              <h1 className="text-primary"> { headerTitles[1] } </h1>
              <p>
                We'll send you new info and tips. You can cancel at any time.
              </p>
              <input
                style={designs.inputDesign}
                placeholder="Your Name"
                className="mb-4">
                </input>
              <input
                style={designs.inputDesign}
                placeholder="Your Email"
                className="mb-4"></input>
              <p className="mt-5 text-left">By subscribing you agree to our Privacy Policy and
              Terms and Conditions.</p>
              <button className="btn mt-3"
                      style={designs.orangeButton}
              >Read More</button>
            </section>
            </div>
          </section>

        </div>
      </div>
    );
  }

}

export default HearingTest;
