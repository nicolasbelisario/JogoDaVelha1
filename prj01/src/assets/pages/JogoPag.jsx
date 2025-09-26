import { Link } from 'react-router-dom';
import Topo from '../components/Topo/index'
import Jogo from '../components/Jogo/index'

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