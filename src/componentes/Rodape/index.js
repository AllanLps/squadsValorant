//src/componentes/Rodape/index.js

import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.instagram.com/a_llan.lopes/?hl=pt-br" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="linkedin.com" target="_blank">
                        <img src="/imagens/linkedin.png" width='30' alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com.br" target="_blank">
                        <img src="/imagens/github.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Desenvolvido por Allan Lopes.
            </p>
        </section>
    </footer>)
}

export default Rodape
