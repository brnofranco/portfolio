import styled from "styled-components";

interface HeaderContainerProps {
	height: string;
	tabTransition: string;
	display: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
	position: fixed;
	width: 15%;
	height: ${(props) => props.height};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	background-color: var(--green);
	padding: 1rem;

	transition: ${(props) => props.tabTransition};

	h3 {
		color: var(--headerTitle);
		border-bottom: 1px solid black;
		font-size: 1.15rem;
	}

	.navigation-data {
		width: 100%;
		display: ${(props) => props.display};
		flex-direction: column;
		gap: 4rem;
		margin-top: 5rem;
	}

	.image-container {
		width: 100%;
		display: ${(props) => props.display};
		justify-content: center;

		.profile-image {
			border-radius: 100%;
		}
	}

	.profile-container {
		display: ${(props) => props.display};
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;

		strong {
			font-size: 0.9rem;
		}

		p,
		li {
			font-size: 0.8rem;
			color: var(--headerText);
		}
	}

	.nav-container {
		display: ${(props) => props.display};
		flex-direction: column;
		gap: 1rem;
		width: 100%;

		button {
			width: auto;
			padding: 1rem;
			padding-left: 0.75rem;
			cursor: pointer;
			transition: 0.5s ease;

			border-left: 2px solid black;

			&:hover {
				background-color: #289869;
			}
		}
	}

	.contact-container {
		display: ${(props) => props.display};
		gap: 1rem;
		flex-wrap: wrap;

		width: 100%;
		transition: 0.5s ease;
		color: black;

		a {
			color: black;
			cursor: pointer;
		}

		button {
			cursor: pointer;
		}
	}

	@media (max-width: 1080px) {
		width: 100%;
		position: fixed;
		z-index: 10;

		h3 {
			font-size: 2rem;
		}

		.profile-container {
			strong {
				font-size: 1.4rem;
			}

			p,
			li {
				font-size: 1.2rem;
			}
		}

		.contact-container {
			a {
				padding: 1rem 0;
			}

			.email {
				padding: 1rem 0;

				strong {
					font-size: 1rem;
				}
			}
		}
	}
`;

export const ContactNav = styled.div`
	display: none;

	@media (max-width: 1080px) {
		position: fixed;
		display: flex;
		justify-content: flex-end;
		z-index: 11;
		width: 100%;

		button {
			border: 0;
			background: inherit;
			right: 1%;
		}

		.background-color {
			background-color: var(--green);
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}
`;
