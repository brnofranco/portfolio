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
	return (
		<CardContainer>
			<img src={schoolLogo} alt={title} />
			<div className="certification-content">
				<h3>{title}</h3>
				<p>{school}</p>
				{time && (
					<>
						Carga horária: <span>{time} horas</span>
					</>
				)}
				{year && (
					<>
						Emissão: <span>{year}</span>
					</>
				)}
			</div>
		</CardContainer>
	);
}
