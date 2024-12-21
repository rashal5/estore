import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Category2 from './components/Category2'
import Services from './components/Services'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'

import smartwatch from "./assets/category/smartwatch2-removebg-preview.png"
import headphone from "./assets/hero/headphone.png"
import Products from './components/Products'
import Blog from './components/Blog'
import Partners from './components/Partners'

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit Eaque reiciendis",
  bgColor: " #f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "HAPPY HOURS",
  date: "14 Jan to 28 Jan",
  image: smartwatch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit Eaque reiciendis",
  bgColor: " #2dcc6f",
};

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner2 data2={BannerData2}/>
      <Blog/>
      <Partners/>
      
    </div>
  )
}

export default App