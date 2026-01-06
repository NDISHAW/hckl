import React from 'react'
import MenuContainer from '../MenuContainer'
import TabsComponent from './LabComponents/Tabs'
import './Products.css'
import Veterenary from './VETERENART/Veterenary.jsx'

export default function Products({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div
      className="w-auto h-auto flex flex-col bg-primary mt-8"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      <section className="w-full ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-1 pb-4 flex-row"
            role="tablist"
          >
            {/* Hospital Products */}
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#hospital"
                role="tablist"
              >
                Hospital Products
              </a>
            </li>
            {/* Laboratory Products */}
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#laboratory"
                role="tablist"
              >
                Laboratory Products
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Research Products
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-1 shadow-lg rounded">
            <div className="px-4 py-0 flex-auto">
              <div className="tab-content tab-space">
                <div
                  className={
                    openTab === 1
                      ? "w-full  flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link1"
                >
                  <MenuContainer />
                </div>
                <div
                  className={
                    openTab === 2
                      ? " w-full flex items-center justify-start lg:justify-center gap-8 py-0 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link2"
                >
                  <TabsComponent />
                </div>
                <div
                  className={
                    openTab === 3
                      ? " w-full flex items-center justify-start lg:justify-center gap-8 py-0 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link3"
                >
                  <Veterenary/>                  
                </div>
                <div
                  className={
                    openTab === 4
                      ? " w-full flex items-center justify-start lg:justify-center gap-8 py-0 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link4"
                >
                  <Veterenary />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
