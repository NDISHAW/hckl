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
      </p>
      {/* <Slider/> */}
      <TabsComponent />
      {/* <MainContainer/> */}
      <MenuContainer />
    </div>
  );
}
