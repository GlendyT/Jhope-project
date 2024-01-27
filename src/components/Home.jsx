import card2 from "../assets/card2.jpg"

export  function Home({user, setUser, albu, song}) {

    const handleLogout = () => {
        setUser({})
    }
  return (
    <div className="contenedor">
        <div className="titulo-card">HAPPY BIRTHDAY JHOPE</div>
        <div className="formulalrio">
          <h1>Here is your ticket to keep loving and supporting j-hope</h1>
        </div>
        <div>
          <picture>
            <img
              src={card2}
              typeof="image/jpg" 
              alt="Card" 
              className="pic2"
            />
          </picture>
          <div>{albu}</div>
        </div>
        <div className="boton"> 
        <button 
        onClick={handleLogout}>Cerrar Sesion</button>
        </div>
    </div>
  )
}
