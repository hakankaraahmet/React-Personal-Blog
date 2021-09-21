import React from 'react'
import Hakkımda from './components/Hakkımda'
import Navbar from "./components/Navbar"
import Çalışmalarım from './components/Çalışmalarım'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hakkımda/>
      <Çalışmalarım/>
    </div>
  )
}

export default App
