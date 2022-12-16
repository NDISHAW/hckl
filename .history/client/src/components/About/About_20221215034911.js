import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import supply from "../images/supply.jpg";
import repair from "../images/repair.jpg";
import design from "../images/design.jpg"

export default function About() {
  return (
    <div>
      <ScreenHeading title={"About Us"} subHeading={"What We Do"} />
      <section id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 py-5">
              <div class="row">
                <div class="col-12">
                  <div class="info-box">
                    <img src={supply} alt="" />
                    <div class="ms-4">
                      <h5>Medical Equipment Supply</h5>
                      <p>
                        Supply of equipment and consumables over the years in
                        the industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="info-box">
                    <img src={repair} alt="" />
                    <div class="ms-4">
                      <h5>Equipment Maintenance</h5>
                      <p>We have been offering maintenance service</p>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="info-box">
                    <img src={design} alt="" />
                    <div class="ms-4">
                      <h5>Technical support</h5>
                      <p>
                        Technical support in design and specification of sites
                        and equipment for various customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              {/* <img src="img/about.png" alt="" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
