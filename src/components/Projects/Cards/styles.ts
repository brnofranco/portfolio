import styled from "styled-components";

export const CardContainer = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem;

	background-color: var(--gray-dark);

	border: 4px solid;
	border-image: var(--green-gradient);

	h3 {
		color: var(--white);
		text-align: center;
	}

	p {
		text-align: center;
		color: var(--gray-light);
	}

	.buttons-container {
		display: flex;
		gap: 1rem;

		a {
			background-color: var(--green);
			border-radius: 5px;
			border: 1px solid var(--green);
			font-weight: bold;
			color: var(--gray-dark);
			padding: 0.5rem;
			min-width: 90px;

			text-align: center;
			font-size: 0.9rem;

			transition: 0.3s ease;

			&:hover {
				background-color: var(--gray-dark);
				color: var(--green);
			}
		}
	}

	@media (max-width: 1080px) {
		width: 40%;
		min-width: 300px;

		p {
			font-size: 0.9rem;
		}
	}
`;
