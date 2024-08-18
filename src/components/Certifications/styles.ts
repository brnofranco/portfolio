import styled from "styled-components";

export const SectionContainer = styled.section`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background-image: url("./darkBg.png");
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;

	.cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	h2 {
		color: var(--white);
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}
`;
