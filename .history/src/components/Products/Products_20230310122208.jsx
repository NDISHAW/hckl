import React from 'react'
// import MainContainer from '../MainContainer'
import MenuContainer from '../MenuContainer'
// import Slider from './LabComponents/Slider'
import TabsComponent from './LabComponents/Tabs'
import './Products.css'

export default function Products() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary scrollbar-hide">
      <section className="w-full my-6">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          Our Products
        </p>
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  setCategory(labEquipment);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Laborotay Equipment
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  setCategory(labReagents);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Laborotay Reagents
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === 1
                      ? "w-full  flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link1"
                >
                  
                    
                </div>

                <div
                  className={
                    openTab === 2
                      ? " w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link2"
                >
                  
                </div>
              </div>
            </div>
            {/* <div className="w-full">
              <RowContainer
                scrollValue={scrollValue}
                flag={false}
                data={foodItems?.filter((n) => n.category == filter)}
              />
            </div> */}
          </div>
        </div>
      </section>
      {/* <Slider/> */}
      <TabsComponent />
      {/* <MainContainer/> */}
      <MenuContainer />
    </div>
  );
}
