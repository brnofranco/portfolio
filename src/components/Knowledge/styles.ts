import styled from "styled-components";

export const SectionContainer = styled.section`
	scroll-snap-align: start;

	background-color: #1b1b20;
	width: 100%;
	min-height: 100vh;
	padding: 2rem 10rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	h2 {
		color: var(--title);
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}

	.stacks-container {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.card-container {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;

		background-color: #111;
		color: var(--title);

		border: 2px solid;
		border-image: linear-gradient(227.91deg, #0b5a39 0%, #14e18c 100%) 1;

		h3 {
			font-size: 1.25rem;
		}

		img {
			color: white;
			width: 50px;
			height: 50px;
		}

		.icons {
			display: flex;
			flex-wrap: wrap;
			gap: 1rem;
		}
	}

	@media (max-width: 1080px) {
		padding: 55px 2rem;

		.card-container {
			width: 100%;

			img {
				width: 45px;
				height: 45px;
			}
		}
	}
`;
