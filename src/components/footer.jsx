import React, { Component } from 'react';
import { utils } from '../stylesheets/utils.js';

class Footer extends Component {

  render() {
    return (
          <div className="container-fluid text-center text-md-left">
            <div className="row pt-4 pb-4">
              <div className="d-flex justify-content-center text-white  col-md-8 mt-md-0 mt-3">
                <ul className="list-inline m-0">
                  <li className="list-inline-item m-0">
                    Australian Hearing
                  </li>
                  <li className="list-inline-item m-0">
                    <div className="d-inline-block w50px align-middle">
                      <div className="dot align-top m-auto bg-light" style={utils.dot} />
                    </div>
                    Privacy Policy
                  </li>
                  <li className="list-inline-item m-0 ">
                    <div className="d-inline-block w50px align-middle">
                      <div className="dot align-top m-auto bg-light" style={utils.dot} />
                    </div>
                    Terms of Use
                  </li>
                  <li className="list-inline-item m-0 ">
                    <div className="d-inline-block w50px align-middle">
                      <div className="dot align-top m-auto bg-light" style={utils.dot} />
                    </div>
                    Sitemap
                  </li>
                </ul>
              </div>
            </div>
          </div>
    );
  }

}

export default Footer;
