import Image from 'next/image';

import { SectionContainer } from "./styles";

export function About() {
    return (
        <SectionContainer>
            <div className="about-content">
                <h1>
                    Muito prazer, sou <br />
                    <strong>Bruno Franco de Moraes</strong>
                </h1>
                <p>Busco aprendizado constante na minha carreira como desenvolvedor para, futuramente, me tornar um desenvolvedor Fullstack.</p>
            </div>
            <Image className="about-image" src="/about.svg" width="400" height="400" alt="rapaz programador" />
        </SectionContainer>
    )
}