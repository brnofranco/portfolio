import styled from "styled-components";

interface ScrollToTopButtonProps {
	opacity: string;
	cursor: string;
}

export const ScrollToTopButton = styled.div<ScrollToTopButtonProps>`
	position: fixed;
	bottom: 50px;
	right: 50px;

	width: 55px;
	height: 55px;

	.icon {
		opacity: ${(props) => props.opacity};
		cursor: ${(props) => props.cursor};
		transition: all 0.3s ease-in-out;
		height: 100%;
		width: 100%;
		color: var(--green);

		border-radius: 50%;
		box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 1080px) {
		bottom: 10px;
		right: 10px;

		width: 40px;
		height: 40px;

		.icon {
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
		}
	}
`;
