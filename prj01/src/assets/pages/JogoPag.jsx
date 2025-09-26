import { Link } from 'react-router-dom';
import Topo from '../components/Topo/index.jsx'
import Jogo from '../components/Jogo/index.jsx'

export default function JogoPag(){
    return(
        <>
            <Topo/>
            <Jogo />
            <Link to="/selecao-mapa">
                <button className="botao-voltar">Trocar de Mapa</button>
            </Link>
        </>
    )
}