import styled from "styled-components";

export const SectionContainer = styled.section`
	background-color: var(--gray);
	width: 100%;
	min-height: 100vh;
	padding: 2rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	h2 {
		color: var(--white);
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}

	.cards-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		flex-wrap: wrap;
	}
`;
