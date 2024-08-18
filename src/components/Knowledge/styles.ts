import styled from "styled-components";

export const SectionContainer = styled.section`
	background-image: url("./lightBg.png");
	background-size: cover;
	width: 100%;
	min-height: 100vh;
	padding: 2rem 10rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	ul {
		list-style: none;
		padding: 0;
		width: 90%;
		position: relative;
		color: var(--white);

		&::before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 21px;
			width: 3px;
			background: var(--white);
		}

		li {
			position: relative;
			margin-bottom: 60px;
			padding-left: 60px;

			&:last-child {
				margin-bottom: 0;
			}

			.timeline-time {
				font-weight: 600;
				margin-bottom: 10px;
				font-size: 16px;
				color: #555;
			}

			.timeline-icon {
				position: absolute;
				left: 12px; // Position the icon close to the line
				top: 0;
				width: 20px;
				height: 20px;
				background-color: #3498db;
				border-radius: 50%;
				border: 3px solid #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				z-index: 1;

				svg {
					color: #fff;
					width: 14px;
					height: 14px;
				}
			}

			.timeline-body {
				background: #f9f9f9;
				padding: 15px 20px;
				border-radius: 6px;
				box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
				position: relative;
				width: calc(
					100% - 60px
				); // Adjusted width for full alignment to the left
				margin-left: 40px; // Spacing from the line

				p {
					margin: 0;
					font-size: 14px;
					color: #333;
					line-height: 1.6;
				}
			}
		}
	}

	h2 {
		color: var(--white);
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
		color: var(--white);

		border: 2px solid;
		border-image: var(--green-gradient);

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
