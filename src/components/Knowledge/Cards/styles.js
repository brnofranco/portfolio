import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 200px;
    width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background-color: #111;

    border: 4px solid;
    border-image: linear-gradient(227.91deg, #0B5A39 0%, #14E18C 100%) 1;

    h3 {
        color: var(--title);
    }

    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 1080px) {
        height: 130px;
        width: 130px;
        padding: 0.5rem;
    }
`