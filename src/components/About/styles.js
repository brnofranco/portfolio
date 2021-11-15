import styled from 'styled-components';

export const SectionContainer = styled.section`
    scroll-snap-align: start;
    
    width: 100%;
    height: 100vh;
    padding: 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .about-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h1 {
        color: var(--title);
        }

        strong {
            color: var(--green);
            font-size: 2.5rem;
        }

        p {
            color: var(--text);
        }
    }

    .about-image {
        flex: 1;
    }

    @media (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .about-content {
            flex: 0;
        }

        .about-image {
            flex: 0;
        }
    }
`