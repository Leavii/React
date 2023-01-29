import './navbar.css';
import logo from './img/logo192.png';

function Navbar() {
    return (
        <nav className="App-navbar">
            <img src={logo} alt="React Logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Content</a></li>
                <li><a href="#">Stuff</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;