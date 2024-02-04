//IMAGENES DE QR
import HP1 from "../assets/HOPE-WORLD2.png";
import jitb1 from "../assets/jitb1.png";
import jitbhe1 from "../assets/jitbHE1.png";
import card4 from "../assets/1.png"
//IMPORTS PARA DESCARGAR IMAGEN
import { useCallback, useRef, useEffect, useState  } from "react";
import { toPng } from "html-to-image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketComponent from "./ticketComponent/TicketComponent";


const diccionarioIconos = {
  HopeWorld: HP1,
  JackInTheBox: jitb1,
  JackInTheBoxHOPEEdition: jitbhe1,
};

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

  export function Home({ user, setUser, albu, song }) {

    const [imageSaved, setImageSaved] = useState(false);

    useEffect(() => {
        if(imageSaved) {
          const timer = setTimeout(() => {
            notify();
            setImageSaved(false);
          }, 3000);
  
          return () => clearTimeout(timer);
        }
    }, [imageSaved]);
  

  //Para descargar la imagen
  const elementRef = useRef(null);
  const htmlToImageConvert = useCallback(() => {
    if(!elementRef.current) return;

    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Hobipalooza";
        link.href = dataUrl;

        link.addEventListener('click', () => {
          setImageSaved(true); // Set the state to true when the download starts
        });

        link.click();
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [elementRef]);

  const handleLogout = () => {
    setUser({});
  };
  return (
    <>
      <div>
        <TicketComponent
          user={user}
          albu={albu}
          song={song}
          elementRef={elementRef}
          handleLogout={handleLogout}
          htmlToImageConvert={htmlToImageConvert}
          notify={notify}
        />
        <ToastContainer />
      </div>
    </>
  );
}
