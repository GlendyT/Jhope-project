import { TituloC } from "../tituloComponente/TituloC";
import Botones from "../buttonComponent/Botones";
import "./ticketComponent.css";
import "./ticketQueries.css";
//IMPORTS PARA DESCARGAR IMAGEN

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
    <div className="container-fluid">
      <TituloC />
      <div className="codigoQR">
        Don´t forget to scan your QR code for a surprise!
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
      </div>
      )
      <div className="ticketname">
        Here is your ticket, keep supporting j-hope´s work!
      </div>
      <Botones
        htmlToImageConvert={htmlToImageConvert}
        handleLogout={handleLogout}
        notify={notify}
      />
    </div>
  );
}
