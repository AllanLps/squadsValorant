import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const times = [  
    {
      nome:'Squad A',
      corPrimaria: '#FF5757',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'Squad B',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const[equipes, setEquipes] = useState([])
  const aoNovoSquad = (equipe) =>{
    setEquipes([...equipes, equipe])
  }

  return (
    <div className="App">
      <Banner /> 
      <Formulario
        times={times.map(time => time.nome)} 
        aoNovoSquad={equipe => 
        aoNovoSquad(equipe)}
      />

      {times.map(
        time =><Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            equipes={equipes.filter(equipe => equipe.time === time.nome)}
        />)}

       <Rodape/> 
    </div>
  );
}

export default App;
