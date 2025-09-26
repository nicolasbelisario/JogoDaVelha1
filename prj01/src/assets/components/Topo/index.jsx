import './style.css'
import clubpenguin from '../../images/clubpenguin.gif'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export default function Topo(){
    return(
        <>
        <header>
            <h1 className='Titulo'>Jogo da velha tranquilo <LocalPizzaIcon fontSize='Large'/></h1>
            <img src={clubpenguin} alt="Club Penguin Dance" />
        </header>
        </>
    )
}