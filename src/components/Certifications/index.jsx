import Card from "./Card";
import { SectionContainer } from "./styles";

export function Certifications() {
    return(
        <SectionContainer>
            <h2>Cursos</h2>
            <div className="cards">
                <Card title="Trilha de React.js" school="Rocketseat Ignite" time="30" schoolImg="/schools/rocketseat.png" />
                <Card title="Trilha de Node.js" school="Rocketseat Ignite" time="4" schoolImg="/schools/rocketseat.png" />
                <Card title="Cursos de Git e JavaScript" school="Alura" time="52" schoolImg="/schools/alura.png" />
                <Card title="Curso Intensivo de Next.js" school="Cod3r" time="6" schoolImg="/schools/cod3r.png" />
            </div>
        </SectionContainer>
    )
}