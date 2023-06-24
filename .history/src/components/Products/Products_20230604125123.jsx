import React from 'react'
// import MainContainer from '../MainContainer'
import MenuContainer from '../MenuContainer'
// import Slider from './LabComponents/Slider'
import TabsComponent from './LabComponents/Tabs'
import './Products.css'
// import EmailOrderForm from '../EmailOrderForm'

export default function Products({ color }) {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="w-auto h-auto flex flex-col bg-primary my-">
      <section className="w-full ">
        {/* <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-blue-300 to-blue-900 transition-all ease-in-out duration-100 mr-auto">
          Our Products
        </p> */}
        <div className="w-full">
          {/* Tabs  */}
          <ul
            className="flex mb-0 list-none flex-wrap pt-1 pb-4 flex-row"
            role="tablist"
          >
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
                href="#link1"
                role="tablist"
              >
                Hospital Products
              </a>
            </li>
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
                href="#link2"
                role="tablist"
              >
                Laborotay Products
              </a>
            </li>

            {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Microscopes
              </a>
            </li> */}

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
                Veterenart Products
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-5 py-1 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-blue-400"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Research Products
              </a>
            </li>
          </ul>
          {/* general products */}
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
                {/* Laboratory Tab */}
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
                {/*  */}
                <div
                  className={
                    openTab === 3
                      ? " w-full flex items-center justify-start lg:justify-center gap-8 py-0 overflow-x-scroll"
                      : "hidden"
                  }
                  id="link2"
                >
                  <TabsComponent />
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
      {/* <TabsComponent /> */}
      {/* <MainContainer/> */}
      {/* <MenuContainer /> */}
      {/* <EmailOrderForm/> */}
    </div>
  );
}
