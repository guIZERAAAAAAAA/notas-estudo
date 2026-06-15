import { Link } from 'react-router-dom'
import './styles.css'
function Header() {
    return (
        <header>
            <h1>Avaliação Profº Renan</h1>
            <Link to='/'>
                <button>Inicio</button>
            </Link>
            <Link to='/about'>
                <button>Sobre</button>
            </Link>
        </header>
    )
}
export default Header