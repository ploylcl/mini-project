import { useState } from 'react'
import './App.css'
import Navbar from '../component/Navbar/Navbar'
import UserHero from '../component/user-hero/UserHero'
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
