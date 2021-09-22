import React from 'react'
import Hakkımda from './components/Hakkımda'
import Navbar from "./components/Navbar"
import Çalışmalarım from './components/Çalışmalarım'
import Yorumlar from "./components/Yorumlar"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hakkımda/>
      <Çalışmalarım/>
      <Yorumlar/>
    </div>
  )
}

export default App
