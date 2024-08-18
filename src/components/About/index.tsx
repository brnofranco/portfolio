import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import { SectionContainer } from "./styles";
import aboutImage from "../../assets/about.svg";
import curriculum from "../../assets/cv.pdf";

export function About() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="about">
			<div className="section-container">
				<div className="about-container">
					<h1>
						{t("about.introduction")} <br />
						<strong>Bruno</strong>
						<b>{t("about.title")}</b>
					</h1>

					<p>Seja muito bem-vindo(a) ao meu portfólio.</p>
					<p>
						Quero te contar minha minha trajetória no mundo da
						tecnologia.
					</p>
					<p>
						Mas antes, quero que você me conheça melhor:
						<ul>
							<li>Jundiai - Interior de São Paulo</li>
							<li>Gosto de música</li>
							<li>Gosto de videogames</li>
							<li>Estou aprendendo a tocar guitarra</li>
							<li>
								Curiosidade: sou destro, mas uso o mouse na mão
								esquerda
							</li>
						</ul>
					</p>

					<div>
						<a href={curriculum} download>
							<FaDownload /> {t("about.curriculum")}
						</a>
					</div>
				</div>

				<div className="image-container">
					<img src={aboutImage} alt="rapaz programador" />
				</div>
			</div>
		</SectionContainer>
	);
}
