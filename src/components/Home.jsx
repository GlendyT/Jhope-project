
import card2 from "../assets/card2.jpg"

import HP from "../assets/HOPE WORLD.svg"
import jitb from "../assets/Jack in the Box.svg"
import jitbhe from "../assets/Jack In The Box (HOPE Edition).svg"

const diccionarioIconos = {
  HopeWorld: HP,
  JackInTheBox: jitb,
  JackInTheBoxHOPEEdition: jitbhe
}

export  function Home({user, setUser, albu, song, album}) {

    const handleLogout = () => {
        setUser({})
    }
  return (
    <div className="contenedor-ticket">
        <div className="titulo-card">HAPPY BIRTHDAY J-HOPE</div>
        <div className="">
          <h1>Here is your ticket to keep loving and supporting j-hope</h1>
        </div>
        <aside className="ticket">
            <img
              src={card2}
              typeof="image/jpg" 
              alt="Card" 
              className="pic2"
            />
          <div className="ticket-inside"> 
            <div className="titulo-user">Name: {user}</div>
            <div className="titulo-album">
              City : {albu}</div>
            <div className="titulo-song">Location: {song}</div>
          </div>

          <img 
           src={diccionarioIconos[albu]}
           typeof="image/svg" 
           alt="Card" 
           className="pic2"
           />
        </aside>
        
        <div className="boton1"> 
        <button 
        onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

