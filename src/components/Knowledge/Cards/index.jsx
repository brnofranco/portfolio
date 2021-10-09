import Image from 'next/image';

import { CardContainer } from './styles';

export default function Card({imageName, title}) {
    return(
        <CardContainer>
            <Image src={`/tecnologies/${imageName}.svg`} alt={title} width={80} height={80}/>
            <h3>{title}</h3>
        </CardContainer>
    )
}