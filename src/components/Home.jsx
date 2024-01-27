import card2 from "../assets/card2.jpg"

export  function Home({user, setUser, albu, song}) {

    const handleLogout = () => {
        setUser({})
    }
  return (
    <div className="contenedor">
        <div className="titulo-card">HAPPY BIRTHDAY J-HOPE</div>
        <div className="formulalrio">
          <h1>Here is your ticket to keep loving and supporting j-hope</h1>
        </div>
        <aside className="ticket">
            <img
              src={card2}
              typeof="image/jpg" 
              alt="Card" 
              className="pic2"
            />
          <div className="titulo-user">Name: {user}</div>
          <div className="titulo-album">City : {albu}</div>
          <div className="titulo-song">Location: {song}</div>
        </aside>
        
        <div className="boton"> 
        <button 
        onClick={handleLogout}>Cerrar Sesion</button>
        </div>
    </div>
  )
}
