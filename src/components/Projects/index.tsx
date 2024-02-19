import Card from "./Cards";

import { SectionContainer } from "./styles";

export function Projects() {
	return (
		<SectionContainer id="projects">
			<h2>Minhas melhores invenções</h2>
			<div className="cards-container">
				<Card
					title="How'sTheWeather"
					description="Feito com React que consome uma API de clima e mostra informações climáticas de qualquer cidade."
					deploy="https://howstheweather-brnofranco.vercel.app/"
					repository="https://github.com/brnofranco/howstheweather"
				/>
				<Card
					title="Habituaí"
					description="Aplicativo de gerenciamento de hábitos com gamificação feito em React."
					repository="https://github.com/Habituai/Front"
				/>
				<Card
					title="Youtube Downloader MP3 From Spotify Playlist"
					description="Script em Python que baixa músicas de uma playlist do Spotify pelo YouTube."
					repository="https://github.com/brnofranco/spotify-playlist-to-mp3"
				/>
				<Card
					title="Portfólio"
					description="Desenvolvido 100% do zero com React."
					repository="https://github.com/brnofranco/portfolio"
				/>
			</div>
		</SectionContainer>
	);
}
