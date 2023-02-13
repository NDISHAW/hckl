import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="header-top contact_info">
      <div className="container">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="follow_us_on">
                <ul>
                  <li>
                    <Link to="/" title="Facebook">
                      <i className="flat flaticon-facebook-logo"> </i>
                    </Link>
                  </li>

                  <li className="separator-pipesign white"> </li>

                  <li>
                    <Link to="/" title="Twitter">
                      <i className="flat flaticon-twitter"> </i>
                    </Link>
                  </li>

                  <li className="separator-pipesign white"> </li>

                  <li>
                    <Link to="/" title="Google">
                      <i className="flat flaticon-google-plus-logo"> </i>
                    </Link>
                  </li>

                  <li className="separator-pipesign white"> </li>

                  <li>
                    <Link to="/" title="Linkedin">
                      <i className="flat flaticon-linkedin-logo"> </i>
                    </Link>
                  </li>

                  <li className="separator-pipesign white"> </li>
                  <li>
                    <Link to="/" title="Instagram">
                      <i className="flat flaticon-instagram"> </i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mail-call">
              <div className="mail-to">
                <i className="flat flaticon-mail-black-envelope-symbol"> </i>
                info@bizler.com
              </div>
              <span className="separator-pipesign white"> </span>
              <div className="call-on">
                <i className="flat flaticon-phone-receiver"> </i>0123-456-789
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
