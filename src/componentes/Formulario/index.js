import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";


const Formulario = (props) => {

  const agentes = [
    'Brimstone',
    'Viper',
    'Omen',
    'Killjoy',
    'Cypher',
    'Sova',
    'Sage',
    'Phoenix',
    'Jett',
    'Reyna',
    'Raze',
    'Breach',
    'Skye',
    'Yoru',
    'Astra',
    'Kayo',
    'Chamber',
    'Neon',
    'Fade',
    'Harbor'
  ]

  const funcoes = [
    'Controlador',
    'Iniciador',
    'Duelista',
    'Sentinela'
  ]


  const [nickname, setNickname] = useState(''); 
  const [imagem, setImagem] = useState(''); 
  const [agente, setAgente] = useState(''); 
  const [funcao, setFuncao] = useState(''); 
  const [time, setTime] = useState(''); 

  const aoSalvar = (evento) =>{
    evento.preventDefault()
    props.aoNovoSquad({
      nickname,
      imagem, 
      agente,
      funcao, 
      time
    })
    setNickname('')
    setImagem('')
    
    
  } 

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o SQUAD no Valorant</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nickname" 
          placeholder="Digite seu nickname" 
          valor={nickname}
          aoAlterado={valor => setNickname(valor)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}  
        />
        <ListaSuspensa 
          label="Seu agente preferido" 
          itens={agentes}
          valor={agente}
          aoAlterado={valor => setAgente(valor)}
          >
        </ListaSuspensa>
        <ListaSuspensa 
          label="Sua função" 
          itens={funcoes}
          valor={funcao}
          aoAlterado={valor => setFuncao(valor)}
          >
        </ListaSuspensa>              
        <ListaSuspensa 
          label="Times" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          >
        </ListaSuspensa>
        <Botao>Criar Squad</Botao>
      </form>
    </section>
  );
};

export default Formulario;
