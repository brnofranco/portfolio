import { CardContainer } from "./styles";

export default function Card({ title, school, time, schoolLogo }) {
	return (
		<CardContainer>
			<img src={schoolLogo} alt={title} />
			<div className="certification-content">
				<h3>{title}</h3>
				<p>{school}</p>
				Carga horária: <span>{time} horas</span>
			</div>
		</CardContainer>
	);
}
