import React from 'react'
import MainContainer from '../MainContainer'
import MenuContainer from '../MenuContainer'
import Slider from './LabComponents/Slider'

export default function Products() {
  return (
    <div>
      <Slider/>
        <MainContainer/>
        <MenuContainer/>
    </div>
  )
}
