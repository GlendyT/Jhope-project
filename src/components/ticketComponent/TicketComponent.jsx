
import HP1 from "../../assets/HOPE-WORLD2.png";
import jitb1 from "../../assets/jitb1.png";
import jitbhe1 from "../../assets/jitbHE1.png";
import Botones from "../buttonComponent/Botones";
import "./TicketComponent.css";
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
        <div className="titulo-card">HAPPY HOBIUARY</div>
        <div className="titulo">
          <h1>Here is your ticket to keep loving and supporting j-hope</h1>
          <h2>Scan the QR code to find out a Surprise</h2>
        </div>
                <div className="contenedor-ticket" ref={elementRef}>
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
            )
            <Botones htmlToImageConvert={htmlToImageConvert} handleLogout={handleLogout} notify={notify}/>

    </>
  );
}
