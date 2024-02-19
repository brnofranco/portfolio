import Card from "./Card";
import { SectionContainer } from "./styles";

import rocketseatLogo from "../../assets/schools/rocketseat.png";
import uptimeLogo from "../../assets/schools/uptime.png";
import voxyLogo from "../../assets/schools/voxy.png";

export function Certifications() {
	return (
		<SectionContainer id="certifications">
			<h2>Tenho os seguintes certificados</h2>
			<div className="cards">
				<Card
					title="Trilha de React.js"
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
