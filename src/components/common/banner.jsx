import React, { Component } from 'react';
import { layouts } from '../../stylesheets/layout.js';
import { designs } from '../../stylesheets/design.js';
import { FaHeadphones, FaPhone } from 'react-icons/fa';

class Banner extends Component {

  render() {
    return (
      <div>
      <section className="dynamic-height" style={layouts.headerBanner}>
        <div className="pt-5 pb-5" >
          <div className="m-auto position-absolute"
                style={layouts.blueheaderbanner}>
            <div className="pt-2 m-auto col-lg-9 d-flex">
              <section className="col-lg-6 text-white">
                <p><span className="mr-2"> An initiative of </span>
                <img src="https://a.icons8.com/iobQcnZV/6YBYw4/ah-logo-white.svg"
                                        alt="Aus hearing icon" /></p>
              </section>
              <section className="pt-2 text-right text-white col-lg-6">
                <p><FaPhone /> 1800 740 301  <FaHeadphones /> Online Hearing</p>
              </section>
            </div>
          </div>
          <article className="d-sm-none d-none d-md-block col-lg-9 heightWebk"

          >
            <div className="col-lg-5" style={{top: "22%", left: "13%"}}>
              <h3 style={designs.Header}>
              We've helped thousands of Australians care for their hearing</h3>
            <p>
              We're proudly part of Australian Hearing, the leaders in hearing
              research and services. We are here to provide information for
              Australians who seeks help about hearing.
            </p>
            <button className="btn text-white"
                    style={designs.orangeButton}> Start live chat </button>
            </div>
          </article>
        </div>
      </section>

      <article className="d-lg-none text-center mt-4 p-3 d-md-none">
        <h5>We've helped thousands of Australians care for their hearing</h5>
        <p>
          We're proudly part of Australian Hearing, the leaders in hearing
          research and services. We are here to provide information for
          Australians who seeks help about hearing.
        </p>
        <button className="btn btn-warning"
                style={designs.orangeButton}
        > Start live chat </button>
      </article>
    </div>
    );
  }

}

export default Banner;
