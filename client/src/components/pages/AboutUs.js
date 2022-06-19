import { FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import profile from '../../assets/imgs/profile.jpg'
export default function AboutUs() {
    return (
        <div id="AboutUs">
            <div className="infoAbility">
                <h4>Developer Fullstack Junior</h4>

                <div className="ability">
                    <p>Habilidades</p>
                    <div className="iconsAbility">
                        <FaNodeJs className='iconNode' />
                        <FaReact className='iconReact' />
                        <FaSass className='iconSass' />
                        <SiMongodb className='iconMongo' />
                    </div>
                    <p className="infoIcons">node</p>
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
                        Desenvolvimento Web,Mobile e sistemas embarcados
                    </p>
                </div>
            </div>

        </div>
    )
}