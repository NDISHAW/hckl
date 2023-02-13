import React from "react";
import maintenance from "./Icons/maintenance.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import Demo from "./Icons/Demo";

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
                <Demo />
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
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.01 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>maintenance</title><path class="cls-1" d="M.59,97C-.88,102.74.45,109.21,4,114.77c4.54-23.64,32.37-13.59,18.08,8.11,12.37-1,19.05-10.55,18.79-22.31-.12-5.54,0-8.55.87-11.07a13.16,13.16,0,0,1,1.67-3.21,11.5,11.5,0,0,1-.91-4.42v-.29a11.73,11.73,0,0,1,1.2-5l-7.43-7.23-2.06,2.73a53.12,53.12,0,0,1-6.66,6.63,18.68,18.68,0,0,1-4.59,2.07C13,84.19,3.65,85.11.59,97Zm58.16-21-44-42.84-6-1.06a3.65,3.65,0,0,1-1.9-1l-5.11-5a3.65,3.65,0,0,1-.07-5.15l6.17-6.23a3.64,3.64,0,0,1,5.14,0l4.53,4.49a3.58,3.58,0,0,1,1,1.83l2,7.31L64,70.79l4.43-4.46a.7.7,0,0,1,1,0l2.89,2.86a.7.7,0,0,1,.21.45c.12.89.19,1.61.26,2.22.15,1.49.23,2.24.5,2.5s1,.3,2.45.4h0c.62,0,1.37.1,2.37.2a.67.67,0,0,1,.43.2l22.22,22.4A11.49,11.49,0,0,1,104.44,110a11.87,11.87,0,0,1-2.59,4.42,11,11,0,0,1-4.22,2.85c-3.75,1.39-8.44.66-12.87-3.81L63.53,92a.76.76,0,0,1-.21-.44c-.18-1.21-.29-2.19-.38-3-.19-1.61-.29-2.45-.61-2.76s-1.26-.37-3.14-.43c-.65,0-1.41,0-2.3-.09a.7.7,0,0,1-.46-.2l-2.84-2.81a.71.71,0,0,1,0-1l5.17-5.22ZM70.29,90.64a1.76,1.76,0,0,1,0-2.5,1.78,1.78,0,0,1,2.51,0L92,107.6a1.77,1.77,0,0,1-2.5,2.52L70.29,90.64Zm5.28-5.34a1.77,1.77,0,0,1,2.49-2.52l19.25,19.48a1.77,1.77,0,1,1-2.49,2.52L75.57,85.3ZM67,55.36l5.94-7.77c7.15-9.71,25.79-4,30.36-21.75,1.46-5.7.13-12.16-3.39-17.73C95.37,31.75,67.55,21.7,81.84,0,69.47,1,62.79,10.55,63.05,22.31c.12,5.16,1.57,9.37-3.32,15.91L54,45.83,64.5,56.06a11.47,11.47,0,0,1,2.5-.7Z"/></svg>
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
