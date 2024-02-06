
import HP1 from "../../assets/HOPE-WORLD2.png";
import jitb1 from "../../assets/jitb1.png";
import jitbhe1 from "../../assets/jitbHE1.png";
import { TituloC } from "../tituloComponente/TituloC";
import Botones from "../buttonComponent/Botones";
import "./ticketComponent.css"
import "./ticketQueries.css"
//IMPORTS PARA DESCARGAR IMAGEN
const diccionarioIconos = {
  HopeWorld: HP1,
  JackInTheBox: jitb1,
  JackInTheBoxHOPEEdition: jitbhe1,
};

export default function TicketComponent({
  user,
  albu,
  song,
  elementRef,
  htmlToImageConvert,
  handleLogout,
  notify,
}) {
  return (
    <>
    <TituloC/>
    <div className="codigoQR">Don´t forget to scan your QR code for a surprise!</div>
                <div className="contenedor-ticket" ref={elementRef} >
                <div className="ticket-inside" >
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
            )
            <div className="ticketname">Here is your ticket, Keep Supporting j-hope´s work!</div>
            <Botones htmlToImageConvert={htmlToImageConvert} handleLogout={handleLogout} notify={notify}/>
            
    </>
  );
}
