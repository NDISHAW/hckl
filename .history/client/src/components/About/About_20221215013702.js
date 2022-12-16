import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import supply from "../images/supply.jpg";

export default function About() {
  return (
    <div>
      <ScreenHeading title={"About Us"} subHeading={"Why work with us"} />
      <section id="about">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 py-5">
              <div class="row">
                <div class="col-12">
                  <div class="info-box">
                    <img src={supply} alt="" />
                    <div class="ms-4">
                      <h5>Equipment Supply</h5>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="info-box">
                    <img src="img/icon4.png" alt="" />
                    <div class="ms-4">
                      <h5>E-mail Marketing</h5>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 mt-4">
                  <div class="info-box">
                    <img src="img/icon5.png" alt="" />
                    <div class="ms-4">
                      <h5>Buisness Marketing</h5>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <img src="img/about.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
