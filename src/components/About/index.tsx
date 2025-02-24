import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import { SectionContainer } from "./styles";
import aboutImage from "../../assets/about.svg";

import curriculumBr from "../../assets/bruno-cv-pt.pdf";
import curriculumEn from "../../assets/bruno-cv-en.pdf";

export function About() {
	const { t, i18n } = useTranslation();

	const selectedLanguage = i18n.language as "pt" | "en";

	const changeLanguageData = {
		pt: curriculumBr,
		en: curriculumEn,
	};

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
					<a href={changeLanguageData[selectedLanguage]} download>
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
