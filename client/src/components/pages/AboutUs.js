import { FaNodeJs, FaReact, FaSass, FaGithub } from 'react-icons/fa'
import { SiMongodb, SiLinkedin } from 'react-icons/si'
import profile from '../../assets/imgs/profile.jpg'
export default function AboutUs() {
    return (
        <div id="AboutUs">
            <div className="infoAbility">
                <p className='titleInfo'></p>

                <div className="ability">
                    <p className='title'>Habilidades</p>
                    <div className="iconsAbility">
                        <FaNodeJs className='iconNode' />
                        <FaReact className='iconReact' />
                        <FaSass className='iconSass' />
                        <SiMongodb className='iconMongo' />
                    </div>
                    <p className="infoIcons"></p>
                </div>

            </div>
            <div className="card">
                <div className="card-photo">

                    <img src={profile} alt="profile" />
                </div>
                <div className="card-description">
                    <p>
                        Desenvolvedor Web Fullstack, formado em Analise e desenvolvimento de sistemas, pela Universidade Nove de Julho desde 06/2022.
                        Conhecimento hibrido em diversas ferramentas, linguagens e frameworks. Assim como C#, Java, Python, Linguagem C.
                        Desenvolvimento Web,Mobile e sistemas embarcados.
                    </p>
                </div>
            </div>
            <div className="network">
                <div className="social">
                    <h4>Redes Sociais</h4>
                    <p>Siga-me!</p>
                    <div className="iconNetwork">
                        <a href="https://www.linkedin.com/in/fausto-garcia-jacinto-silva-b7a5a9186/" target="_blank">
                            <SiLinkedin className='iconLinkedin' />
                        </a>
                        <a href="https://github.com/fausto-GJS" target="_blank">
                            <FaGithub className="iconGit" />
                        </a>
                    </div>
                <div id="contactNetwork">
                 <h5>Deixe um comentário ou sugestôes</h5>
                 <p>seu email será ocutado</p>
                        <p>nome</p><input type="text"/>
                        <p>email</p><input type="email"/>
                        <p>comentário</p><textarea ></textarea>
                    
                </div>
                </div>
            </div>

        </div>
    )
}