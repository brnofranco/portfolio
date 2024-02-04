import Card from "./Card";
import { SectionContainer } from "./styles";

import aluraLogo from "../../assets/schools/alura.png";
import cod3rLogo from "../../assets/schools/cod3r.png";
import rocketseatLogo from "../../assets/schools/rocketseat.png";

export function Certifications() {
	return (
		<SectionContainer id="certifications">
			<h2>Cursos</h2>
			<div className="cards">
				<Card
					title="Trilha de React.js"
					school="Rocketseat Ignite"
					time="100"
					schoolLogo={rocketseatLogo}
				/>
				<Card
					title="Formação Typescript"
					school="Alura"
					time="40"
					schoolLogo={aluraLogo}
				/>
				<Card
					title="Curso Intensivo de Next.js"
					school="Cod3r"
					time="6"
					schoolLogo={cod3rLogo}
				/>
			</div>
		</SectionContainer>
	);
}
