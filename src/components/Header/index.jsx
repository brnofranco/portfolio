import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

import { HeaderContainer } from './styles';

export function Header() {
    return (
        <HeaderContainer>
            <Image src="/foto.png" alt="Foto perfil" width="210px" height="210px" className="profile-image" />

            <div className="profile-container">
                <h3>PERFIL</h3>
                <strong>
                    Brasileiro, solteiro, 18 anos <br />
                    Jundiaí, São Paulo, Brasil
                </strong>
                <p>Busco meu primeiro estágio para poder iniciar minha carreira como desenvolvedor, podendo assim, futuramente, me tornar um desenvolvedor Fullstack.</p>
            </div>
        
            <div className="contact-container">
                <h3>CONTATO</h3>
                <a href="https://api.whatsapp.com/send?phone=5511997443938" target="_blank" rel="noreferrer">Whats App</a>
                <a href="https://www.linkedin.com/in/brunofmoraes/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/brnofranco" target="_blank" rel="noreferrer">GitHub</a>
                <div className="email">
                    <MdEmail size="25px" />
                    <span>brunofrancodemoraes@gmail.com</span>
                </div>
            </div>
        </HeaderContainer>
    )
}