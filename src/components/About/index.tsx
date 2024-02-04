import aboutImage from "../../assets/about.svg";
import { SectionContainer } from "./styles";

export function About() {
	return (
		<SectionContainer id="about">
			<div className="about-content">
				<h1>
					Muito prazer, sou <br />
					<strong>Bruno Franco de Moraes</strong>
				</h1>

				<p>
					Busco aprendizado constante na minha carreira como
					desenvolvedor para, futuramente, me tornar um desenvolvedor
					Fullstack.
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
