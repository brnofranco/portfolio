import { useState, useEffect} from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import Hamburger from 'hamburger-react'
import { MdEmail } from 'react-icons/md';
import { AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

import { ContactNav, HeaderContainer } from './styles';

export function Header() {
    function copyEmailToClipBoard() {
        navigator.clipboard.writeText('brunofrancodemoraes@gmail.com');
        toast.success('E-mail copiado!')
    }

    const [profileIsOpen, setProfileIsOpen] = useState(true);
    const imageSize = "200px";
    
    return (
        <>
        <div><Toaster/></div>
        <ContactNav>
            <div className={profileIsOpen ? '' : 'background-color'}>
                <button onClick={() => setProfileIsOpen(!profileIsOpen)}>
                    <Hamburger toggled={profileIsOpen} toggle={setProfileIsOpen} />
                </button>
            </div>
        </ContactNav>
        <HeaderContainer
            height={profileIsOpen ? '100vh' : '0'}
            display={profileIsOpen ? 'flex' : 'none'}
        >
            
            <div className="image-container">
                <Image src="/foto.png" width={imageSize} height={imageSize} className="profile-image"
                alt="Foto Bruno Franco de Moraes"
                />
            </div>

            <div className="profile-container">
                <h3>PERFIL</h3>
                <strong>
                    Brasileiro, solteiro, 18 anos <br />
                    Jundiaí, São Paulo, Brasil
                </strong>
                {/* Adicionar coisas aqui!!!!!!!! */}
            </div>
        
            <div className="contact-container">
                <h3>CONTATO</h3>
                <a href="https://api.whatsapp.com/send?phone=5511997443938" target="_blank" rel="noreferrer">
                    <AiOutlineWhatsApp size="16" />
                    <strong>What&#39;s App</strong> 
                </a>
                <a href="https://www.linkedin.com/in/brunofmoraes/" target="_blank" rel="noreferrer">
                    <AiOutlineLinkedin size="16" />
                    <strong>LinkedIn</strong> 
                </a>
                <a href="https://github.com/brnofranco" target="_blank" rel="noreferrer">
                    <AiOutlineGithub size="16" />
                    <strong>GitHub</strong>
                </a>
                <button className="email" onClick={copyEmailToClipBoard} title="Copiar email">
                    <MdEmail size="15" />
                    <strong>brunofrancodemoraes@gmail.com</strong> 
                </button>
            </div>
        </HeaderContainer>
        </>
    )
}