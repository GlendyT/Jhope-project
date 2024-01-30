
//IMAGENES DE TICKETS
import card1 from "../assets/1.png"
import card2 from "../assets/2.png"
import card3 from "../assets/3.png"
import card4 from "../assets/4.png"
import card5 from "../assets/5.png"
import card6 from "../assets/6.png"
//IMAGENES DE QR
import HP1 from "../assets/HOPE-WORLD2.png"
import jitb1 from "../assets/jitb1.png"
import jitbhe1 from "../assets/jitbHE1.png"
//IMPORTS PARA DESCARGAR IMAGEN
import { useRef } from "react"
import { toPng } from "html-to-image"

const diccionarioIconos = {
  HopeWorld: HP1,
  JackInTheBox: jitb1,
  JackInTheBoxHOPEEdition: jitbhe1
}

export  function Home({user, setUser, albu, song}) {

  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false})
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "Hobipalooza";
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.log(err);
    });
  };

    const handleLogout = () => {
        setUser({})
    }
  return (
    <div className="contenedor-ticket">
        <div className="titulo-card">HAPPY BIRTHDAY J-HOPE</div>
        <div className="">
          <h1>Here is your ticket to keep loving and supporting j-hope</h1>
        </div>
        <aside 
        className="ticket"
        ref={elementRef}
        >
            <img
              src={card5}
              typeof="image/jpg" 
              alt="Card" 
              className="pic2"
            />
          <div className="ticket-inside"> 
            <div className="titulo-user">
              Name: <div className="titulo-user1"> {user}</div>
              </div>
            <div className="titulo-album">
              City: <div className="titulo-album1">{albu}</div>
            </div>
            <div className="titulo-song">
              Location: <div className="titulo-song1"> {song}</div>
            </div>
          </div>

          <img 
           src={diccionarioIconos[albu]}
           typeof="image/svg" 
           alt="Card" 
           className="pic3"
           />
        </aside>
      
        <div className="boton1"> 
        <button 
        onClick={htmlToImageConvert}
          >Download and Share</button></div>
        <div className="boton2"> 
        <button 
          onClick={handleLogout}>Log Out</button> </div>

        

    </div>
  )
}

