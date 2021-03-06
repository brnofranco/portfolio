import styled from 'styled-components';

export const SectionContainer = styled.section`
    scroll-snap-align: start;
    
    background-color: #1B1B20;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    h2 {
        color: var(--title);
        font-size: 2rem;
    }

    .cards-position {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }
`