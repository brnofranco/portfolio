import Image from 'next/image';

import { SectionContainer } from "./styles";

export function About() {
    return (
        <SectionContainer>
            <div className="about-content">
                <h1>
                    Muito prazer, me chamo <br />
                    <strong>Bruno Franco de Moraes</strong>
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id suscipit consectetur magnam necessitatibus ex aperiam, vel, quae quam commodi ab recusandae, tempore quibusdam at ut debitis doloremque ipsa. Deleniti, saepe.</p>
            </div>
            <Image className="about-image" src="/about.svg" width="400" height="400" alt="rapaz programador" />
        </SectionContainer>
    )
}