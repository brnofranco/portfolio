import { CardContainer } from "./styles";

export default function Card({ image, title }) {
	return (
		<CardContainer>
			<img src={image} alt={title} width={80} height={80} />
			<h3>{title}</h3>
		</CardContainer>
	);
}
