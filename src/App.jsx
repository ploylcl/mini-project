import { useState } from 'react'
import './App.css'
import Navbar from '../component/Navbar/Navbar'
import UserHero from '../component/user-hero/UserHero'
import '../component/Navbar/navbar.css';
import { Routes,Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

   return (
    <div>
      <Navbar />
      <UserHero />
    </div>
  )
}

export default App
