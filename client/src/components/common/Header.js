import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div id="Header">
            <div className="logo">
                <h1>Fausto Garcia Jacinto Silva</h1>
            </div>
            <div className="menu">
                <Link to='/'>Sobre</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contato</Link>
            </div>
        </div>
    )
}