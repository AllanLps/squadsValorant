import Equipes from '../Equipes'
import './time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}

    return(
        (props.equipes.length > 0) ? <section className='time' style={css}>
            <h3 style={cssBorder}>{props.nome}</h3>
            <div className='player'>
                {props.equipes.map(
                    equipes => <Equipes 
                        corDeFundo={props.corPrimaria}
                        key={equipes.nickname}
                        nickname={equipes.nickname} 
                        funcao={equipes.funcao}
                        agente={equipes.agente}
                        imagem={equipes.imagem}        
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time