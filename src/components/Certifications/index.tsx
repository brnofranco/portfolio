import Card from "./Card";
import { SectionContainer } from "./styles";

import { useTranslation } from "react-i18next";
import rocketseatLogo from "../../assets/schools/rocketseat.png";
import uptimeLogo from "../../assets/schools/uptime.png";
import voxyLogo from "../../assets/schools/voxy.png";

export function Certifications() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="certifications">
			<h2>{t("certifications.title")}</h2>
			<div className="cards">
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
				<Card
					title='Certificate of Conclusion from the course "S.A.T."'
					school="Uptime"
					year="2017"
					schoolLogo={uptimeLogo}
				/>
			</div>
		</SectionContainer>
	);
}
