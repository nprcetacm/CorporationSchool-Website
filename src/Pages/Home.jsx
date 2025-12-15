import React from 'react'
import Navbar from '../Components/Navbar'
import MainPage from '../Components/MainPage'
import AboutUs from '../Components/AboutUs'
import SchoolToppers from '../Components/SchoolToppers'
import TamilThaiPlayer from '../Components/TamilThaiPlayer'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <br />
    <MainPage/>
    <AboutUs/>
    <SchoolToppers/>
    <Footer />
    </>
    )
}

export default Home