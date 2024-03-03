import { Link } from 'react-router-dom';


export const Footer = () => {
    return (
        <div className="footer-main">
                <div className="rights-container">
                    <h1>SymboLite</h1>
                    <p>&copy; 2024 Hecho por <a href="https://github.com/JUANESSMURF" target="_blank" rel="noopener noreferrer">
                        Juan Ortiz
                    </a></p>
                    <p>Todos los derechos son reservados</p>
                </div>
                <div className="contactme-container">
                    <ul className="contactme-ul">
                        <li>
                            <a href="https://github.com/JUANESSMURF" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li><a href="" target="_blank" rel="noopener noreferrer">
                            micorreo@gmail.com
                            </a>
                        </li>
                        <li>
                            <a>Términos y condiciones</a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}