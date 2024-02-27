import styled from "styled-components";

export const ContactNav = styled.div`
	position: fixed;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	z-index: 101;
	width: 100%;
	padding: 1rem;

	button,
	p {
		display: none;
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

		height: 50px;
		padding: 0;
		background-color: var(--green);

		button,
		p,
		div {
			display: block;
			flex: 1;
		}

		p {
			text-align: center;
			font-weight: bold;
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
