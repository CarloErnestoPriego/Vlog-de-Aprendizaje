import Card from './Components/Card'
import Button from './Components/Button'

import spiderIcon from './assets/images/spiderman-icon.jpg'
import valorantIcon from './assets/images/valorant-icon.png'

import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card
      image= {spiderIcon}
      username= 'Carlos'
      postContent='Mi primera publicacion'
      />
      <Card
      image= {valorantIcon  }
      username= 'Valorant'
      postContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      />
      <Button
      text='enviar'
      />
    </>
  )
}

export default App