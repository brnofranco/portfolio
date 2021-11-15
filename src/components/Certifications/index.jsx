import Card from "./Card";
import { SectionContainer } from "./styles";

export function Certifications() {
    return(
        <SectionContainer>
            <h2>Cursos</h2>
            <Card title="Trilha de React.js" school="Rocketseat Ignite" time="30" schoolImg="/schools/rocketseat.png" />
            <Card title="Git e Github + 8 cursos sobre JavaScript" school="Alura" time="52" schoolImg="/schools/alura.png" />
            <Card title="Projetos ágeis com SCRUM" school="Digital Innovation One" time="2" schoolImg="/schools/dio.png" />
        </SectionContainer>
    )
}