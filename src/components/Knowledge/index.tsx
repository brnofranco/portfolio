import { useTranslation } from "react-i18next";
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
import pythonIcon from "../../assets/technologies/python.svg";
import reactIcon from "../../assets/technologies/react.svg";
import scIcon from "../../assets/technologies/sc.svg";
import springIcon from "../../assets/technologies/spring.svg";
import tailwindIcon from "../../assets/technologies/tailwind.svg";
import tlIcon from "../../assets/technologies/tl.svg";
import tsIcon from "../../assets/technologies/ts.svg";
import { SectionContainer } from "./styles";

export function Knowledge() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="knowledge">
			<h2>{t("knowledge.title")}</h2>
			<div className="stacks-container">
				<div className="card-container">
					<h3>{t("knowledge.languages")}</h3>
					<div className="icons">
						<img src={jsIcon} title="JavaScript" alt="JavaScript" />
						<img src={tsIcon} title="TypeScript" alt="TypeScript" />
						<img src={nodeIcon} title="NodeJS" alt="NodeJS" />
						<img src={javaIcon} title="Java" alt="Java" />
						<img src={pythonIcon} title="Python" alt="Python" />
					</div>
				</div>

				<div className="card-container">
					<h3>Frameworks</h3>
					<div className="icons">
						<img src={reactIcon} title="React" alt="React" />
						<img src={nextIcon} title="NextJS" alt="NextJs" />
						<img
							src={springIcon}
							title="Spring Boot"
							alt="Spring Boot"
						/>
					</div>
				</div>

				<div className="card-container">
					<h3>{t("knowledge.tests")}</h3>
					<div className="icons">
						<img
							src={tlIcon}
							title="Testing Library"
							alt="Testing Library"
						/>
						<img src={jestIcon} title="Jest" alt="Jest" />
						<img
							src={cucumberIcon}
							title="Cucumber"
							alt="Cucumber"
						/>
						<img src={cypressIcon} title="Cypress" alt="Cypress" />
						<img src={junitIcon} title="JUnit" alt="JUnit" />
					</div>
				</div>

				<div className="card-container">
					<h3>{t("knowledge.styling")}</h3>
					<div className="icons">
						<img
							src={tailwindIcon}
							title="Tailwind CSS"
							alt="Tailwind CSS"
						/>
						<img
							src={scIcon}
							title="Styled Components"
							alt="Styled Components"
						/>
						<img
							src={muiIcon}
							title="Material UI"
							alt="Material UI"
						/>
					</div>
				</div>

				<div className="card-container">
					<h3>{t("knowledge.versioning")}</h3>
					<div className="icons">
						<img src={gitIcon} title="Git" alt="Git" />
					</div>
				</div>
			</div>
		</SectionContainer>
	);
}
