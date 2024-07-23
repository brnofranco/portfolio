import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import { SectionContainer } from "./styles";
import aboutImage from "../../assets/about.svg";
import curriculum from "../../assets/cv.pdf";

export function About() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="about">
			<div className="about-container">
				<h1>
					{t("about.introduction")} <br />
					<strong>Bruno</strong>
					<b>{t("about.title")}</b>
				</h1>

				<p>{t("about.paragraph")}</p>

				<div>
					<a href={curriculum} download>
						<FaDownload /> {t("about.curriculum")}
					</a>
				</div>
			</div>

			<div className="image-container">
				<img src={aboutImage} alt="rapaz programador" />
			</div>
		</SectionContainer>
	);
}
