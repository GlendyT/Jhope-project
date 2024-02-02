import Formulario from "./components/Formulario";
import { Home } from "./components/Home";
import {  useState } from "react";
import "./App.css";
import Background from "./components/Background";


function App() {
  const [user, setUser] = useState([]);
  const [albu, setAlbu] = useState([]);
  const [song, setSong] = useState([]);


  return (
    <main className="app">
      <Background/>

      {!user.length > 0 ? (
        <Formulario setUser={setUser} setAlbu={setAlbu} setSong={setSong} />
      ) : (
        <Home
          user={user}
          setUser={setUser}
          albu={albu}
          setAlbu={setAlbu}
          song={song}
          setSong={setSong}
        />
      )}
    </main>
  );
}

export default App;

/**/
