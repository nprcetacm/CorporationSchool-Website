import './App.css'
import HisVisMisPage from './Pages/HisVisMisPage'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import PrincipalMsgPage from './Pages/PrincipalMsgPage'
import Management from './Pages/Management'
import CurriculamPage from './Pages/CurriculamPage'
import NoticeBoardPage from './Pages/NoticeBoardPage'
import PhotoGalleryPage from './Pages/PhotoGalleryPage'
import AchievementsPage from './Pages/AchievementsPage'
import LoginPage from './Pages/LoginPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HisVisMisPage/>} />
        <Route path="/principal" element={<PrincipalMsgPage />} />
        <Route path="/wellwisher" element={<Management/>} />
        <Route path="/curriculum" element={<CurriculamPage />} />
        <Route path="/noticeboard" element={<NoticeBoardPage/>} />
        <Route path="/photos" element={<PhotoGalleryPage />} />
        <Route path='/achievements' element={<AchievementsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App