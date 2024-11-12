import calc_logo from './calc.jpg';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <img src={calc_logo} alt="logo"></img>
            <h1>Grade Calculator</h1>

        </header>
    )
}

export default Navbar;