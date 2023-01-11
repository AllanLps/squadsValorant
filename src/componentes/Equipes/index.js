import './Equipes.css'

const Equipes = ({nickname, imagem, funcao, corDeFundo, agente}) => {
    return(
        <div className='equipes'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nickname}/> 
            </div>
            <div className='rodape'> 
                <h4>{nickname}</h4>
                <h5>{agente}</h5>
                <h6>{funcao}</h6>
            </div>
        </div>
    )
}

export default Equipes