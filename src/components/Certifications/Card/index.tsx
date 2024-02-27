import { useTranslation } from "react-i18next";
import { CardContainer } from "./styles";

interface CertificationCardProps {
	title: string;
	school: string;
	time?: string;
	year?: string;
	schoolLogo: string;
}

export default function Card({
	title,
	school,
	schoolLogo,
	time,
	year,
}: CertificationCardProps) {
	const { t } = useTranslation();

	return (
		<CardContainer>
			<img src={schoolLogo} alt={title} />
			<div className="certification-content">
				<h3>{title}</h3>
				<p>{school}</p>
				{time && (
					<>
						{t("certifications.card.workload")}:{" "}
						<span>{time} horas</span>
					</>
				)}
				{year && (
					<>
						{t("certifications.card.issuance")}: <span>{year}</span>
					</>
				)}
			</div>
		</CardContainer>
	);
}
