import './Header.css'
import logo from '../../images/logo1.png'
import name from "../../images/project-name1.png"
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <div className="logo-container">
                    <img src={logo} alt="logo" class="logo" />
                    <img src={name} alt="name" class="name" />
                </div>

                <div className="button-container">
                    <button className="button"><Link to="/register">Register</Link></button>
                    <button className="button"><Link to="/login">Login</Link></button>
                </div>
            </div>
        </>
    )
}

export default Header