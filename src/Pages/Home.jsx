import React from 'react'
import Navbar from '../Components/Navbar'
import MainPage from '../Components/MainPage'
import AboutUs from '../Components/AboutUs'
import SchoolToppers from '../Components/SchoolToppers'
import TamilThaiPlayer from '../Components/TamilThaiPlayer'

function Home() {
  return (
    <>
    <Navbar/>
    <br />
    <MainPage/>
    <AboutUs/>
    <SchoolToppers/>
    </>
    )
}

export default Home