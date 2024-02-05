import aboutImage from "../../assets/about.svg";
import { SectionContainer } from "./styles";

export function About() {
	return (
		<SectionContainer id="about">
			<div className="about-content">
				<h1>
					Muito prazer, sou <br />
					<strong>Bruno</strong>
					<h2>Desenvolvedor Full Stack</h2>
				</h1>

				<p>
					Minha jornada no universo da programação é guiada pela
					paixão por solucionar problemas. A cada linha de código,
					enxergo uma oportunidade de criar soluções inovadoras e
					impactantes. Com dedicação e entusiasmo, busco
					constantemente aprimorar minhas habilidades para enfrentar
					desafios e contribuir para o desenvolvimento tecnológico.
				</p>
			</div>
			<div className="about-image">
				<img
					src={aboutImage}
					width="400"
					height="400"
					alt="rapaz programador"
				/>
			</div>
		</SectionContainer>
	);
}
