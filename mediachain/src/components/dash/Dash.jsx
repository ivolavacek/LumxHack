import './Dash.css'
import dash from '../../images/dash.png'
import { Link } from 'react-router-dom'

function Dash() {
    return(
        <>
            <div className='dash'>
                <div className="menu-container">
                    <Link to="/dash"><button className="button">Dashboard</button></Link>
                    <Link to="/contract"><button className="button">Contract</button></Link>
                </div>

                <p>Example for a musical artist</p>
                
                <img src={dash} alt="dash-example" class="dash" />
            </div>
        </>
    );
}

export default Dash;