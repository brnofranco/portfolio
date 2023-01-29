import { SectionContainer } from "./styles";
import aboutImage from "../../assets/about.svg";

export function About() {
	return (
		<SectionContainer>
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