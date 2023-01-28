import styled from "styled-components";

export const CardContainer = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem;

	background-color: #111;

	border: 4px solid;
	border-image: linear-gradient(227.91deg, #0b5a39 0%, #14e18c 100%) 1;

	h3 {
		color: var(--title);
	}

	p {
		text-align: center;
		color: var(--text);
	}

	.buttons-container {
		display: flex;
		gap: 1rem;

		a {
			background-color: var(--green);
			border-radius: 5px;
			border: 1px solid var(--green);
			font-weight: bold;
			color: #111;
			padding: 0.5rem;
			min-width: 90px;

			text-align: center;
			font-size: 0.9rem;

			transition: 0.3s ease;

			&:hover {
				background-color: #111;
				color: var(--green);
			}
		}
	}

	@media (max-width: 1080px) {
		width: 100%;

		p {
			font-size: 0.8rem;
		}
	}
`;
