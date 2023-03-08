import React from 'react'
import MainContainer from '../MainContainer'
import MenuContainer from '../MenuContainer'
import Slider from './LabComponents/Slider'
import TabsComponent from './LabComponents/Tabs'
import './Products.css'

export default function Products() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary scrollbar-hide">
      {/* <Slider/> */}
        {/* <MainContainer/> */}
        <MenuContainer/>
        <TabsComponent/>
    </div>
  )
}
