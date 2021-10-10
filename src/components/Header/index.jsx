import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { MdEmail } from 'react-icons/md';
import { AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

import { HeaderContainer } from './styles';

export function Header() {
    function copyEmailToClipBoard() {
        navigator.clipboard.writeText('brunofrancodemoraes@gmail.com');
        toast.success('E-mail copiado!')
    }
    
    return (
        <>
        <div><Toaster/></div>
        <HeaderContainer>
            <Image src="/foto.png" alt="Foto perfil" width="180px" height="180px" className="profile-image" />

            <div className="profile-container">
                <h3>PERFIL</h3>
                <strong>
                    Brasileiro, solteiro, 18 anos <br />
                    Jundiaí, São Paulo, Brasil
                </strong>
                <li>Técnico em Informática para Internet</li>
                <li>
                    Análise e Desenvolvimento de Sistema <br />
                    (2° Semestre)
                </li>
            </div>
        
            <div className="contact-container">
                <h3>CONTATO</h3>
                <a href="https://api.whatsapp.com/send?phone=5511997443938" target="_blank" rel="noreferrer">
                    <AiOutlineWhatsApp size="19" />
                    <strong>What&#39;s App</strong> 
                </a>
                <a href="https://www.linkedin.com/in/brunofmoraes/" target="_blank" rel="noreferrer">
                    <AiOutlineLinkedin size="19" />
                    <strong>LinkedIn</strong> 
                </a>
                <a href="https://github.com/brnofranco" target="_blank" rel="noreferrer">
                    <AiOutlineGithub size="19" />
                    <strong>GitHub</strong>
                </a>
                <button className="email" onClick={copyEmailToClipBoard}>
                    <MdEmail size="15" />
                    <strong>brunofrancodemoraes@gmail.com</strong> 
                </button>
            </div>
        </HeaderContainer>
        </>
    )
}