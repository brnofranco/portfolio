import styled from "styled-components";

export const ContactNav = styled.div`
	position: fixed;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	z-index: 101;
	width: 100%;
	padding: 1rem;

	button.hamburger,
	img.icon {
		display: none;
	}

	button.change-language {
		cursor: pointer;
	}

	select {
		color: white;
		font-weight: bold;
	}

	option {
		color: black;
	}

	@media (max-width: 1080px) {
		justify-content: space-between;
		align-items: center;

		height: 50px;
		padding: 0;
		background-color: var(--green);

		button.change-language,
		button.hamburger,
		img.icon,
		div {
			display: block;
			flex: 1;
		}

		button.change-language {
			display: flex;
			align-items: center;
			justify-content: end;
			padding-right: 0.5rem;
		}

		div {
			display: flex;
			justify-content: flex-end;
		}

		select {
			color: black;
		}
	}
`;
