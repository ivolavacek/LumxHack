import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return(
        <>
            <div className="menu-container">
                <Link to="/dash"><button className="button">Dashboard</button></Link>
                <Link to="/contract"><button className="button">Contract</button></Link>
            </div>
        </>
    );
}

export default Login;