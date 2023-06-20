import Card from "./Cards";

export function Projects() {
	return (
		<section
			id="SectionContainer"
			className="bg-secondaryBackground w-full min-h-screen p-8 flex flex-col justify-center items-center gap-8"
		>
			<h2 className="text-title text-4xl font-semibold">Projetos</h2>
			<div className="flex items-center justify-center flex-wrap gap-8">
				<Card
					title="Portfolio"
					description="Este portfolio que você está vendo neste exato momento. Feito usando Vite + React.js + TS."
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
		</section>
	);
}
