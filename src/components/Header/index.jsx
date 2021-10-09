import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { MdEmail } from 'react-icons/md';

import { HeaderContainer } from './styles';

export function Header() {
    function copyEmailToClipBoard() {
        navigator.clipboard.writeText('brunofrancodemoraes@gmail.com');
        toast.success('E-mail copiado!')
    }
    
    return (
        <HeaderContainer>
            <div><Toaster/></div>
            <Image src="/foto.png" alt="Foto perfil" width="200px" height="200px" className="profile-image" />

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
                <a href="https://api.whatsapp.com/send?phone=5511997443938" target="_blank" rel="noreferrer">What&#39;s App</a>
                <a href="https://www.linkedin.com/in/brunofmoraes/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/brnofranco" target="_blank" rel="noreferrer">GitHub</a>
                <button className="email" onClick={copyEmailToClipBoard}>
                    <MdEmail size="25px" />
                    <strong>brunofrancodemoraes@gmail.com</strong> 
                </button>
            </div>
        </HeaderContainer>
    )
}