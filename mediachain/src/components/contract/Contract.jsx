import './Contract.css'
import { Link } from 'react-router-dom'

function Contract() {
    return(
        <>
            <div className="menu-container">
                <Link to="/dash"><button className="button">Dashboard</button></Link>
                <Link to="/contract"><button className="button">Contract</button></Link>
            </div>
            
            <div className="to-be-announced">To be developed</div>
        </>
    );
}

export default Contract;