import styled from "styled-components";

export const HeaderContainer = styled.aside`
	z-index: 100;
	position: fixed;
	width: 300px;
	height: 100vh;

	display: flex;
	justify-content: center;

	background-color: var(--green);
	padding: 1rem;

	.sidebar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8rem;

		height: 100%;

		.image-container {
			width: 80%;

			.profile-image {
				border-radius: 20%;
				width: 100%;
				height: 100%;
			}
		}

		.nav-container {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 80%;

			button {
				padding: 1rem;
				padding-left: 0.75rem;
				cursor: pointer;
				transition: 0.3s ease;

				border-left: 2px solid black;

				&:hover {
					background-color: #289869;
				}
			}

			@media (max-width: 1080px) {
				gap: 1.75rem;

				button {
					font-size: 1.25rem;
				}
			}
		}

		.contact-container {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			width: 100%;

			a,
			button {
				color: black;
				cursor: pointer;
			}

			@media (max-width: 1080px) {
				gap: 2rem;

				a,
				button {
					transform: scale(1.3);
				}
			}
		}
	}
`;
