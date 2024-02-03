//IMAGENES DE QR
import HP1 from "../assets/HOPE-WORLD2.png";
import jitb1 from "../assets/jitb1.png";
import jitbhe1 from "../assets/jitbHE1.png";
import card4 from "../assets/1.png"
//IMPORTS PARA DESCARGAR IMAGEN
import { useRef } from "react";
import { toPng } from "html-to-image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const diccionarioIconos = {
  HopeWorld: HP1,
  JackInTheBox: jitb1,
  JackInTheBoxHOPEEdition: jitbhe1,
};

export function Home({ user, setUser, albu, song }) {

  const notify = () => {
    toast.info('🐿️Downloading Your Ticket!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }; 

  //Para descargar la imagen
  const elementRef = useRef(null);
  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
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
    setUser({});
  };
  return (
    <>
      <div className="titulo-card">HAPPY HOBIUARY</div>
      <div className="titulo">
        <h1>Here is your ticket to keep loving and supporting j-hope</h1>
        <h2>Scan the QR code to find out a Surprise</h2>
      </div>
        <div  className="contenedor-ticket" ref={elementRef} >
          <div className="ticket-inside">
            <div className="titulo-user">
              Name: <div className="titulo-user1">{user}</div>
            </div>
            <div className="titulo-user">
              City: <div className="titulo-user1">{albu}</div>
            </div>
            <div className="titulo-user">
              Location: <div className="titulo-user1">{song}</div>
            </div>
          </div>
          <img
            src={diccionarioIconos[albu]}
            typeof="image/png"
            alt="Card"
            className="pic3"
         />
        </div>

        <div className="boton-container"> 
      <div className="boton-container2">
      <div className="boton2">
        <button onClick={() => {
          htmlToImageConvert();
          notify();
        }}>Download</button>
        <ToastContainer/>
      </div>
      <div className="boton3">
        <button onClick={handleLogout}>Log Out</button>
      </div>
      </div>
      </div>
    </>
  );
}
