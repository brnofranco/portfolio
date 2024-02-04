import Card from "./Cards";

import cssIcon from "../../assets/technologies/css.svg";
import gitIcon from "../../assets/technologies/git.svg";
import htmlIcon from "../../assets/technologies/html.svg";
import jsIcon from "../../assets/technologies/js.svg";
import nextIcon from "../../assets/technologies/next.svg";
import nodeIcon from "../../assets/technologies/node.svg";
import reactIcon from "../../assets/technologies/react.svg";
import tsIcon from "../../assets/technologies/ts.svg";
import { SectionContainer } from "./styles";

export function Knowledge() {
	return (
		<SectionContainer id="knowledge">
			<h2>Conhecimentos</h2>
			<div className="cards-position">
				<Card image={htmlIcon} title="HTML" />
				<Card image={cssIcon} title="CSS" />
				<Card image={jsIcon} title="JavaScript" />
				<Card image={tsIcon} title="TypeScript" />
				<Card image={reactIcon} title="React.js" />
				<Card image={nextIcon} title="Next.js" />
				<Card image={nodeIcon} title="Node.js" />
				<Card image={gitIcon} title="Git" />
			</div>
		</SectionContainer>
	);
}
