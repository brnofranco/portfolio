import Card from "./Card";
import { SectionContainer } from "./styles";

import { useTranslation } from "react-i18next";
import rocketseatLogo from "../../assets/schools/rocketseat.png";
import courseraLogo from "../../assets/schools/coursera.png";
import uptimeLogo from "../../assets/schools/uptime.png";
import voxyLogo from "../../assets/schools/voxy.png";

export function Certifications() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="certifications">
			<h2>{t("certifications.title")}</h2>
			<div className="cards">
				<Card
					title="Software Design and Architecture"
					school="Coursera"
					time="32"
					schoolLogo={courseraLogo}
				/>
				<Card
					title="Introduction to Cloud Computing"
					school="Coursera"
					time="12"
					schoolLogo={courseraLogo}
				/>
				<Card
					title={t("certifications.rocketseat")}
					school="Rocketseat Ignite"
					time="100"
					schoolLogo={rocketseatLogo}
				/>
				<Card
					title="Proficiency Achievement Certificate - Low Advanced"
					school="Voxy"
					year="2023"
					schoolLogo={voxyLogo}
				/>
			</div>
		</SectionContainer>
	);
}
