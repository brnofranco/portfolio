import Image from 'next/image';

import { CardContainer } from "./styles";

export default function Card({title, school, time, schoolImg}) {
    return(
        <CardContainer>
            <Image src={schoolImg} alt={title} height="100%" width="100%" />
            <div className="certification-content">
                <h3>{title}</h3>
                <p>{school}</p>
                <c>Carga horária: <span>{time} horas</span></c>
            </div>
        </CardContainer>
    )
}