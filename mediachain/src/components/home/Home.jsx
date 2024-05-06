import './Home.css'
import logo from '../../images/logo.png'
import name from "../../images/project-name3.png"
import lumx from '../../images/lumxhack-logo-ethrio.png'
import tanssi from '../../images/tanssi-logo.png'
import chiliz from '../../images/chilliz-logo.png'
import scroll from '../../images/scroll-logo.png'
import polygon from '../../images/polygon-logo.png'
import filecoin from '../../images/filecoin-logo.png'
import perfilCarlos from '../../images/perfil-carlos-junior.jpeg'
import perfilFlavia from '../../images/perfil-flavia-firmino.png'
import perfilIvo from '../../images/perfil-ivo-lavacek.jpg'
import perfilJoao from '../../images/perfil-joao-rodrigo.jpg'

function Home() {
    return (
        <>
            <div className="div1">
                <div className="container-div1">
                <img src={logo} alt="logo" class="logo-div" />
                <img src={name} alt="name" class="name-div" />
                </div>
                <div className="text1">Manage copyright for any type of media</div>
                <div className="text2">Films, series, videos and audio</div>
                <div className="bullets">
                    <div className="square"><p>Tokenize your content with Blockchain</p></div>
                    <div className="square"><p>Track your earnings and royalties distribution</p></div>
                    <div className="square"><p>Get transparent contracts with your coworkers</p></div>
                </div>
            </div>

            <div className="div2">
                <div className="title-div2">Features</div>
                <div className="features-grid">
                <div className="feature">
                    <p className="title">Enables collaboration</p>
                    <p className="text">Create customized contracts with all project stakeholders</p>
                </div>
                <div className="feature">
                    <p className="title">Creates transparency</p>
                    <p className="text">Provide access to verify all transactions and payment splits</p>
                </div>
                <div className="feature">
                    <p className="title">Offers legal support</p>
                    <p className="text">Get help to upload your content in various plataforms</p>
                </div>
                <div className="feature">
                    <p className="title">Genetrates automatic statements</p>
                    <p className="text">Get real-time bank statements</p>
                </div>
                <div className="feature">
                    <p className="title">Gets you paid</p>
                    <p className="text">Settle payments directly into your bank account</p>
                </div>
                <div className="feature">
                    <p className="title">Evaluates performance</p>
                    <p className="text">Dashboard with insights and revenue analysis</p>
                </div>
                </div>
            </div>

            <div className="div4">
                <div className="title-div4">Our Team</div>
                <div className="membros">
                <div className="perfil">
                    <img src={perfilCarlos} alt="foto-carlos-junior" class="membro" />
                    <div className="nome-membro">Carlos Júnior</div>
                    <div className="funcao-membro">Blockchain Developer</div>
                </div>

                <div className="perfil">
                <img src={perfilFlavia} alt="foto-flavia-firmino" class="membro" />
                    <div className="nome-membro">Flávia Firmino</div>
                    <div className="funcao-membro">Business and Innovation</div>
                </div>
                
                <div className="perfil">
                    <img src={perfilIvo} alt="foto-ivo-lavacek" class="membro" />
                    <div className="nome-membro">Ivo Lavacek</div>
                    <div className="funcao-membro">FullStack Developer</div>
                </div>
                
                <div className="perfil">
                <img src={perfilJoao} alt="foto-joao-rodrigo" class="membro" />
                    <div className="nome-membro">João Rodrigo</div>
                    <div className="funcao-membro">Blockchain Developer</div>
                </div>          
                </div>
            </div>

            <div className="div3">
                <div className="evento">
                <div className="subtitle-div3">Event</div>
                <img src={lumx} alt="lumx" class="lumx" />
                </div>

                <div className="patrocinadores">
                <div className="subtitle-div31">Sponsors</div>
                <div className="sponsors">
                    <img src={tanssi} alt="tanssi-logo" class="sponsor" />
                    <img src={chiliz} alt="chiliz-logo" class="sponsor" />
                    <img src={scroll} alt="scroll-logo" class="sponsor" />
                    <img src={polygon} alt="polygon-logo" class="sponsor" />
                    <img src={filecoin} alt="filecoin-logo" class="sponsor" />
                </div>
                </div>
            </div>
        </>
    )
}

export default Home;