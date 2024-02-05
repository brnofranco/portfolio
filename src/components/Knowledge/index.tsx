import cucumberIcon from "../../assets/technologies/cucumber.svg";
import cypressIcon from "../../assets/technologies/cypress.svg";
import gitIcon from "../../assets/technologies/git.svg";
import javaIcon from "../../assets/technologies/java.svg";
import jestIcon from "../../assets/technologies/jest.svg";
import jsIcon from "../../assets/technologies/js.svg";
import junitIcon from "../../assets/technologies/junit.svg";
import muiIcon from "../../assets/technologies/mui.svg";
import nextIcon from "../../assets/technologies/next.svg";
import nodeIcon from "../../assets/technologies/node.svg";
import reactIcon from "../../assets/technologies/react.svg";
import scIcon from "../../assets/technologies/sc.svg";
import springIcon from "../../assets/technologies/spring.svg";
import tailwindIcon from "../../assets/technologies/tailwind.svg";
import tlIcon from "../../assets/technologies/tl.svg";
import tsIcon from "../../assets/technologies/ts.svg";
import { SectionContainer } from "./styles";

export function Knowledge() {
	const iconSize = 50;

	return (
		<SectionContainer id="knowledge">
			<h2>Tenho experiência com</h2>
			<div className="stacks-container">
				<div className="card-container">
					<h3>Linguagens de programação</h3>
					<div className="icons">
						<img
							src={jsIcon}
							title="JavaScript"
							alt="JavaScript"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={tsIcon}
							title="TypeScript"
							alt="TypeScript"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={nodeIcon}
							title="NodeJS"
							alt="NodeJS"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={javaIcon}
							title="Java"
							alt="Java"
							width={iconSize}
							height={iconSize}
						/>
					</div>
				</div>

				<div className="card-container">
					<h3>Frameworks</h3>
					<div className="icons">
						<img
							src={reactIcon}
							title="React"
							alt="React"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={nextIcon}
							title="NextJS"
							alt="NextJs"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={springIcon}
							title="Spring Boot"
							alt="Spring Boot"
							width={iconSize}
							height={iconSize}
						/>
					</div>
				</div>

				<div className="card-container">
					<h3>Ferramentas de teste</h3>
					<div className="icons">
						<img
							src={tlIcon}
							title="Testing Library"
							alt="Testing Library"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={jestIcon}
							title="Jest"
							alt="Jest"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={cucumberIcon}
							title="Cucumber"
							alt="Cucumber"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={cypressIcon}
							title="Cypress"
							alt="Cypress"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={junitIcon}
							title="JUnit"
							alt="JUnit"
							width={iconSize}
							height={iconSize}
						/>
					</div>
				</div>

				<div className="card-container">
					<h3>Ferramentas de estilização</h3>
					<div className="icons">
						<img
							src={tailwindIcon}
							title="Tailwind CSS"
							alt="Tailwind CSS"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={scIcon}
							title="Styled Components"
							alt="Styled Components"
							width={iconSize}
							height={iconSize}
						/>
						<img
							src={muiIcon}
							title="Material UI"
							alt="Material UI"
							width={iconSize}
							height={iconSize}
						/>
					</div>
				</div>

				<div className="card-container">
					<h3>Ferramenta de versionamento</h3>
					<div className="icons">
						<img
							src={gitIcon}
							title="Git"
							alt="Git"
							width={iconSize}
							height={iconSize}
						/>
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
