import styled from "styled-components";

export const CardContainer = styled.div`
	width: 40%;
	height: 12rem;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	padding: 1rem;

	background-color: var(--gray-dark);
	color: var(gray-light);

	border: 4px solid;
	border-image: var(--green-gradient);

	img {
		max-height: 100%;
		max-width: 100%;
	}

	.certification-content {
		h3 {
			color: var(--white);
			text-decoration: underline;
			padding-bottom: 0.5rem;
		}

		p {
			color: var(--white);
			opacity: 0.6;
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 1080px) {
		width: 100%;

		img {
			max-height: 100%;
			max-width: 40%;
		}
	}
`;
