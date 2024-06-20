import { useTranslation } from "react-i18next";
import Card from "./Cards";

import { SectionContainer } from "./styles";

export function Projects() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="projects">
			<h2>{t("projects.title")}</h2>
			<div className="cards-container">
				<Card
					title="Habituaí"
					description={t("projects.descriptions.habituai")}
					repository="https://github.com/Habituai/Front"
				/>
				<Card
					title="Youtube Downloader MP3 From Spotify Playlist"
					description={t("projects.descriptions.spotifytomp3")}
					repository="https://github.com/brnofranco/spotify-playlist-to-mp3"
				/>
				<Card
					title="How's The Weather"
					description={t("projects.descriptions.howstheweather")}
					deploy="https://howstheweather-brnofranco.vercel.app/"
					repository="https://github.com/brnofranco/howstheweather"
				/>
				<Card
					title="Blog"
					description={t("projects.descriptions.blog")}
					deploy="https://brnoblog.vercel.app/"
					repository="https://github.com/brnofranco/portfolio"
				/>
			</div>
		</SectionContainer>
	);
}
