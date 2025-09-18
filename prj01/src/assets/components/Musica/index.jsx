import PizzaTheme from '../../PizzaTheme.mp3'

export default function Musica(){
    return(
        <>
        <div className='Musga'>
            <p>Música tranquila para acompannhar a jogatina</p>
            <audio controls autoplay loop src={PizzaTheme}></audio>
        </div>
            
        </>
    )
}