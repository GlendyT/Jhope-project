

export  function Home({user, setUser, albu, song}) {

    const handleLogout = () => {
        setUser({})
    }
  return (
    <div className="formulario">
        <h1>Bienvenido</h1>
        <h2>{user}</h2>
        <h2>{albu}</h2>
        <h2>{song}</h2>
        <button 
        onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  )
}
