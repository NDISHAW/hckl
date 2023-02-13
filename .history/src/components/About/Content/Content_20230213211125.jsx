import React from "react";
import maintenance from "./Icons/maintenance.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import Demo from "./Icons/Demo";
import { ReactSVG } from "react-svg";
import Maintenance from "./Icons/Maintenance";

const Section = styled.section`
  padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 00;
  line-height: normal;
  color: #67c5f8;
  text-align: center;
  margin-bottom: 2px;
`;

const SubTitle = styled.h5`
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  text-align: center;
  color: #aeaeae;
  margin-bottom: 25px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const IconWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  border: solid 1px #eff2f9;
  background-color: #f8faff;
  margin-bottom: 30px;
  position: relative;
  > svg {
    transition: all 0.3s ease-in;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    > svg {
      transform: translate(-50%, -50%) rotateY(360deg);
    }
  }
`;

const BoxTitle = styled.h4`
  font-size: 18px;
  font-weight: 300;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const Content = (flag) => {
  const width = window.innerWidth;
  return (
    <Section className="w-full my-6">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          ABOUT US
        </p>
        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          Hospital Consumables Kenya Limited is a wholly Kenyan company. The
          directors bring in many years of <br /> experience in the Health care
          sector having been involved in:
        </div>
        <div className="flex flex-wrap">
          <motion.div className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box data-aos={width >= 1400 ? "fade-right" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Supply</BoxTitle>
              <Text>
                Supply of equipment and consumables over the years in the
                industry
              </Text>
            </Box>
          </motion.div>
          <div className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box data-aos="fade-up">
              <IconWrap>
                <Maintenance />
              </IconWrap>
              <BoxTitle>Maintenance</BoxTitle>
              <Text>
                We offer maintenance services for the supplied equipment
              </Text>
            </Box>
          </div>
          <div className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                <Demo />
              </IconWrap>
              <BoxTitle>Technical support</BoxTitle>
              <Text>
                We offer Technical support in design and specification of sites
                and equipment for various customers
              </Text>
            </Box>
          </div>
          <div className="w-275 h-[375px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box data-aos={width >= 1400 ? "fade-left" : "fade-up"}>
              <IconWrap>
                {/* <Demo /> */}
                <ReactSVG src="Technical.svg" />
              </IconWrap>
              <BoxTitle>Motivation</BoxTitle>
              <Text>
                Our motivation is to provide quality products at affordable
                prices in the Kenyan market and East Africa as a whole. No
                equipment is soo well designed and manufactured that it will
                NEVER fail, for this reason we pay special emphasis on getting
                principals who are ready to offer us back up in cases of
                equipment failure. It is this commitment that we extend to our
                customers
              </Text>
            </Box>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Content;
