import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <button className="button"><Link to="/login">Login</Link></button>
                <button className="button"><Link to="/register">Register</Link></button>
            </div>
        </>
    )
}

export default Header