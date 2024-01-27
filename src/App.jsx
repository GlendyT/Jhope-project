import Formulario from "./components/Formulario"
import Background from "./components/Background"
import {Home} from "./components/Home"
import { useState } from "react"
import "./index.css"


function App() {

  const [user, setUser] = useState([])
  const [albu, setAlbu] = useState([])
  const [song, setSong] = useState([])

  return (
    <>
    <div className='App'>

      {
        !user.length > 0
        ? <Formulario 
            setUser={setUser}
            setAlbu={setAlbu}
            setSong={setSong}

            />
        : <Home 
            user={user} setUser={setUser}
            albu={albu} setAlbu={setAlbu}
            song={song} setSong={setSong}

            />
      }
    </div>
    </>
  )
}

export default App