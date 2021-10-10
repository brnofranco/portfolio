import { CardContainer } from './styles';

export default function Card({description, title, deploy, repository}) {
    return(
        <CardContainer>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="buttons-container">
                <a target="_blank" href={`https://github.com/brnofranco/${repository}`} rel="noreferrer">Repositório</a>
                {
                    deploy
                    ? <a target="_blank" href={deploy} rel="noreferrer">Site</a>
                    : ''
                }
            </div>
        </CardContainer>
    )
}