import { useState } from "react"
import { rolas, rolasalbum } from "../Data/rolas"
import hw from "../assets/hw.png"


const Formulario = ({ setUser, setAlbu, setSong}) => {

    const [nombre, setNombre] = useState("")
    const [album, setAlbum] = useState("")
    const [cancion, setCancion] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(nombre === ""){
            setError(true)
            return
        }
        setError(false)

        setUser([nombre])
        setAlbu([album])
        setSong([cancion])
    } 
  return (
    <div className="contenedor">
      <div className="formulario">
        <h1>Logo</h1>
      </div>
      <div>
        <picture>
          <img 
          src={hw}
          typeof="image/png" 
          alt="Titulo" 
          className="pic"
          />
        </picture>
      </div>
        <form 
          onSubmit={handleSubmit}
          >
            <div className="username"> 
              <input 
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              placeholder="Ingresa tu usuario de Twitter"
              />
              </div> 
            <div className="username2"> 
            <label>Album</label>
             <select
              onChange={e => setAlbum(e.target.value)}
              value={album}
             >
              <option value="" >Selecciona tu Album Favorito</option>
              {rolasalbum.map(nombre => (
                <option
                 key={nombre.nombre}
                 value={nombre.nombre}
                >
                  {nombre.nombre}
                </option>
              ))}
             </select>
              </div>
              
              <div className="username2">
                <label>Canciones</label>
                      <select 
                       onChange={e => setCancion(e.target.value)}
                       value={cancion}

                      >
                        <option value="">Selecciona tu Cancion Favorita</option>
                        {rolas.map(nombre => (
                          <option
                           key={nombre.nombre}
                           value={nombre.nombre}
                          >
                            {nombre.nombre}
                          </option>
                        ))}
                      </select>
              </div>

            <button>Generar Card</button>
        </form>
        {error && <p>Es Necesario que llenes todos los campos</p>}
 
    </div>
  )
}

export default Formulario