import { useState } from "react";
import { rolas } from "../Data/rolas";
import { Filtroalbum } from "./Filtroalbum";
import hw from "../assets/hw.png";

const Formulario = ({ setUser, setAlbu, setSong }) => {
  const [nombre, setNombre] = useState("");
  const [album, setAlbum] = useState("");
  const [cancion, setCancion] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "") {
      setError(true);
      return;
    }
    setError(false);

    setUser([nombre]);
    setAlbu([album]);
    setSong([cancion]);
  };
  return (
    <div className="contenedor">
      <img src={hw} typeof="image/png" alt="Titulo" className="pic" />
        <div className="username">
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Use your Twitter/X @username"
          /></div>
        <form onSubmit={handleSubmit}>
          
            <Filtroalbum album={album} setAlbum={setAlbum} />
            <div className="username3">
            <label>Songs</label>
            <select
              onChange={(e) => setCancion(e.target.value)}
              value={cancion}
            >
              <option value="">Choose Your favorite Song</option>
              {rolas.map((nombre) => (
                <option key={nombre.nombre} value={nombre.nombre}>
                  {nombre.nombre}
                </option>
              ))}
            </select>
           
          </div>
          
          <button className="button1" 
          >Generate Card</button>

        </form>
        
        {error && <p className="error">All questions must be filled out</p>}
      
    </div>
  );
};

export default Formulario;
