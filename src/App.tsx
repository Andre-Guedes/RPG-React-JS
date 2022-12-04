import { useEffect } from "react"
import * as C from "./app.styles"
import './App.css'

import { Character } from "./components/character"
import { useCharacter } from "./hooks/useCharacter"

function App() {
  const char = useCharacter()

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
  }, [])
  
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code){
      case "KeyA":
      case "ArrowLeft":
        char.moveLeft()
      break
      case "KeyS":
      case "ArrowDown":
        char.moveDown()
      break
      case "KeyD":
      case "ArrowRight":
        char.moveRight()
      break
      case "KeyW":
      case "ArrowUp":
        char.moveUp()
      break 
    }
  }

  return (
    <C.container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}/>
      </C.Map>
    </C.container>
  )
}

export default App
