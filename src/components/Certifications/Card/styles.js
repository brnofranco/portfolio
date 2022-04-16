import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 40%;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding: 1rem;

    background-color: #111;
    color: var(--text);

    border: 4px solid;
    border-image: linear-gradient(227.91deg, #0B5A39 0%, #14E18C 100%) 1;


    img {
        min-height: 100%;
        min-width: 100%;
    }

    .certification-content {
        h3 {
            color: var(--title);
            text-decoration: underline;
        }

        p {
            color: var(--title);
            opacity: 0.6;
            margin-bottom: 1rem;
        }
    }   

    @media (max-width: 1080px) {
        width: 100%;
    }
`