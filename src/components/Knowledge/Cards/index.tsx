import { CardContainer } from "./styles";

interface KnowledgeCardsProps {
	image: string;
	title: string;
}

export default function Card({ image, title }: KnowledgeCardsProps) {
	return (
		<CardContainer>
			<img src={image} alt={title} width={80} height={80} />
			<h3>{title}</h3>
		</CardContainer>
	);
}
