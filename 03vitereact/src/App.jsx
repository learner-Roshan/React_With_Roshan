import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>Practicing Tailwind Css</h1>

    <Card name="Roshan Koirala" des="I am currently studying in Pulchowk Engineering Campus"/>
    <Card name="Koirala Roshan" des="I am currently studying in Admark Academy"/>
    </>
  )
}

export default App
