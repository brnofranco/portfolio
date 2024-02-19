import styled from "styled-components";

export const ContactNav = styled.div`
	display: none;

	@media (max-width: 1080px) {
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;

		z-index: 101;
		width: 100%;
		height: 50px;
		background-color: var(--green);

		button,
		p {
			flex: 1;
		}

		p {
			text-align: center;
			font-weight: bold;
		}
	}
`;
