import { NavBar } from './NavBar'
import { Carrito } from './Carrito'

export const Header = (props) => {
    
    return (
        <header>
            <h1 id="titulo">Arte-Sano</h1>
            <NavBar />
            <Carrito numero={props.numero} />
        </header>
    )
}


