import Card from "./Cards";

import { SectionContainer } from "./styles";

export function Projects() {
	return (
		<SectionContainer>
			<h2>Projetos</h2>
			<div className="cards-position">
				<Card
					title="Portfolio"
					description="Vite + React.js + TS"
					deploy="https://brunofrancodemoraes.vercel.app/"
					repository="portfolio"
				/>
				<Card
					title="Calculadora IMC"
					description="Site feito com React.js que calcula IMC e mostra seu resultado de acordo com a tela."
					deploy="https://bmi-calculator-olive.vercel.app/"
					repository="bmi-calculator"
				/>
				<Card
					title="How'sTheWeather"
					description="Site feito com React.js que consome uma API de clima e mostra informações sobre sua cidade."
					deploy="https://howstheweather-brnofranco.vercel.app/"
					repository="howstheweather"
				/>
				<Card
					title="Gerador de Cards (posts)"
					description="Site feito com React.js que consome uma API com informações genéricas para ser mostrada nos posts."
					deploy="https://eloquent-ardinghelli-09985e.netlify.app/"
					repository="project-1"
				/>
			</div>
		</SectionContainer>
	);
}
