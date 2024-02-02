
import { useEffect, useState } from "react";
import HP1 from "../../assets/HOPE-WORLD2.png";
import jitb1 from "../../assets/jitb1.png";
import jitbhe1 from "../../assets/jitbHE1.png";
import Botones from "../botones/Botones";
import "./TicketComponent.css";
//IMPORTS PARA DESCARGAR IMAGEN
const diccionarioIconos = {
  HopeWorld: HP1,
  JackInTheBox: jitb1,
  JackInTheBoxHOPEEdition: jitbhe1,
};

export default function TicketComponent({ user, albu, song, elementRef, htmlToImageConvert, handleLogout, notify }) {
  const [ready, isReady] = useState(false);
  const ticketNumber = Math.floor(Math.random() * 1000000);

  useEffect(() => {
    const timer = setTimeout(() => {
      isReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="ticketComponentContainer">
        <div className="tituloContainer">
          <h1 className="titulocard">Here is your ticket to keep loving and supporting j-hope</h1>
        </div>

        {
          !ready ? (
            <div className="spinnerContainer">
              <h2>Generating your ticket...</h2>
              <div className="spinner" />
            </div>
          ) : (
            <>

              <div className="newticketcontainer" ref={elementRef}>
                <div className="ticket">
                  <div className="stub">
                    <div className="top">
                      <span className="admit">Admit</span>
                      <span className="line"></span>
                      <span className="num">
                        Invitation:
                        <span> &nbsp;31415926</span>
                      </span>
                    </div>
                    <div className="number">1</div>
                    <div className="invite">
                      Invite for you
                    </div>
                  </div>
                  <div className="check">
                    <div>
                      <div className="">
                        <div>
                          <p className="labeltext">You're Invited:
                            <span className="">&nbsp;{`${user}`}</span>
                          </p>
                        </div>

                        <div>
                          <p className="labeltext">City:
                            <span className="">&nbsp;{`${albu}`}</span>
                          </p>
                        </div>

                        <div>
                          <p className="labeltext">Location:
                            <span className="">&nbsp;{`${song}`}</span>
                          </p>
                        </div>

                      </div>
                    </div>
                    <div className="number">#1</div>
                    <div className="info">
                      <section>
                        <div className="title">Date</div>
                        <div>18/02/2024</div>
                      </section>
                      <section>
                        <div className="title">Issued By</div>
                        <div>J-Hope</div>
                      </section>
                      <section>
                        <div className="title">Invite Number</div>
                        <div>{ticketNumber}</div>
                      </section>
                    </div>

                  </div>
                  <div className="qrcode">
                    <img
                      src={diccionarioIconos[albu]}
                      typeof="image/png"
                      alt="Card"
                      className="qrimage"
                    />
                  </div>
                </div>
              </div>
              <div className="mobilecontent" />
              <Botones htmlToImageConvert={htmlToImageConvert} handleLogout={handleLogout} notify={notify} />
            </>
          )
        }
      </div>

    </>
  )
}
