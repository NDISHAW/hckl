import React from 'react'
import Products from '../Products/Products'
import Layout from './components/Layout'

export default function Home() {
  return (<Layout children={<Products/>}/>  )
}
