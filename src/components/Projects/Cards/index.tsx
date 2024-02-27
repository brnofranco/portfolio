import { useTranslation } from "react-i18next";
import { CardContainer } from "./styles";

interface ProjectCardProps {
	description: string;
	title: string;
	deploy?: string;
	repository: string;
}

export default function Card({
	description,
	title,
	deploy,
	repository,
}: ProjectCardProps) {
	const { t } = useTranslation();

	return (
		<CardContainer>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="buttons-container">
				<a target="_blank" href={repository} rel="noreferrer">
					{t("projects.card.repository")}
				</a>
				{deploy && (
					<a target="_blank" href={deploy} rel="noreferrer">
						{t("projects.card.website")}
					</a>
				)}
			</div>
		</CardContainer>
	);
}
