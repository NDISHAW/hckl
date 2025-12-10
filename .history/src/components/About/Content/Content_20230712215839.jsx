import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Demo from "./Icons/Demo";
import { ReactSVG } from "react-svg";
import Maintenance from "./Icons/Maintenance";
import Medical from './Icons/Support'
import Technical from "./Icons/Technical";
import Motivation from "./Icons/Motivation";

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

const BoxTitle = styled.h3`
  font-size: 26px;
  font-weight: 400;
  line-height: normal;
  color: #5273c7;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: normal;
  line-height: 1.58;
  color: #8f8f8f;
  margin-bottom: 0;
  max-width: 350px;
`;

const Content = (flag) => {
  const width = window.innerWidth;
  return (
    <Section className="w-full my-8 ">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-bold capitalize text-Main relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto justify-center">
          ABOUT US
        </p>
        <div className="w-full flex items-start justify-start lg:justify-start gap-8 py-6 overflow-x-scroll scrollbar-none">
          <p>
            {" "}
            Hospital Consumables Kenya Limited is a wholly Kenyan company. The
            directors bring in many years of experience in the Health
            care sector having been involved in:
          </p>
        </div>
        <div className="flex flex-wrap">
          <motion.div className="w-275 h-[475px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box>
              <IconWrap>
                {/* <Demo /> */}
                <Medical />
              </IconWrap>
              <BoxTitle>Supply</BoxTitle>
              <Text>
                Supply of equipment and consumables over the years in the
                industry
              </Text>
            </Box>
          </motion.div>
          <div className="w-275 h-[475px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box>
              <IconWrap>
                <Maintenance />
              </IconWrap>
              <BoxTitle>Maintenance</BoxTitle>
              <Text>
                We offer maintenance services for the supplied equipment
              </Text>
            </Box>
          </div>
          <div className="w-275 h-[475px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box>
              <IconWrap>
                <Technical />
              </IconWrap>
              <BoxTitle>Technical support</BoxTitle>
              <Text>
                We offer Technical support in design and specification of sites
                and equipment for various customers
              </Text>
            </Box>
          </div>
          <div className="w-275 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box>
              <IconWrap>
                <Demo />
                <ReactSVG src="TEchnical.svg" hidden />
                {/* <Motivation/> */}
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
          <div className="w-275 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box>
              <IconWrap>
                <Demo />
                <ReactSVG src="TEchnical.svg" hidden />
                {/* <Motivation/> */}
              </IconWrap>
              <BoxTitle>Mission</BoxTitle>
              <Text>
                Our Mission is to build long-term relationships with our customers and 
              </Text>
            </Box>
          </div>
          <div className="w-275 h-[575px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
            <Box>
              <IconWrap>
                <Demo />
                <ReactSVG src="TEchnical.svg" hidden />
                {/* <Motivation/> */}
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
