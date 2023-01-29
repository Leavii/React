import '../css/Header.css';
import logo from '../img/logo192.png';

function Navbar() {
    return (
        <header className="App-header">
        <div>
            <img src={logo} alt="React Logo" />
            <div>
                <h1>React Test Site</h1>
                <p className="App-signature">by Me</p>
            </div>
        </div>
            <nav className="App-navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Content</a></li>
                    <li><a href="#">Stuff</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;