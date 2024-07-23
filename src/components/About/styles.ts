import styled from "styled-components";

export const SectionContainer = styled.section`
	scroll-snap-align: start;

	margin: 0 auto;
	width: 90%;
	height: 100vh;
	padding: 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;

	.about-container {
		flex: 6;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		h1 {
			color: var(--title);
			font-size: 2rem;
			display: flex;
			flex-direction: column;
		}

		strong {
			color: var(--green);
			font-size: 5rem;
			font-weight: bold;
		}

		b {
			color: var(--green);
			font-size: 2rem;
			font-weight: bold;
		}

		p {
			color: var(--text);
			line-height: normal;
		}

		div {
			display: flex;

			a {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				background-color: inherit;
				border: 2px solid var(--green);
				border-radius: 0.5rem;
				padding: 1rem 1.25rem;
				color: var(--green);
				font-weight: 600;
				transition: 0.3s ease;

				&:hover {
					background-color: var(--green);
					color: white;
				}
			}
		}
	}

	.image-container {
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
		}
	}

	@media (max-width: 1080px) {
		padding-top: 55px;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.about-container {
			flex: 0;
		}

		.image-container {
			flex: 0;

			img {
				width: 70%;
			}
		}
	}
`;
