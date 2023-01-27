import Card from "./Cards";

import { SectionContainer } from "./styles";
import htmlIcon from "../../assets/technologies/html.svg";
import cssIcon from "../../assets/technologies/css.svg";
import jsIcon from "../../assets/technologies/js.svg";
import tsIcon from "../../assets/technologies/ts.svg";
import reactIcon from "../../assets/technologies/react.svg";
import nextIcon from "../../assets/technologies/next.svg";
import nodeIcon from "../../assets/technologies/node.svg";
import gitIcon from "../../assets/technologies/git.svg";

export function Knowledge() {
	return (
		<SectionContainer>
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
