import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 25%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    padding: 1rem;

    background-color: var(--green);

    position: fixed;

    h3 {
        color: var(--headerTitle);
        border-bottom: 1px solid black;
        font-size: 1.15rem;
    }

    .profile-image {
        border-radius: 50%;
    }
    
    .profile-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        strong {
            font-size: 0.9rem;
        }

        p, li {
            font-size: 0.8rem;
            color: var(--headerText);
        }
    }

    .contact-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        width: 100%;

        a {
            width: 100%;
            padding: 0.5rem 0;
            background-color: #000;
            color: #bbb;
            display: flex;
            text-align: center;
            justify-content: center;
            gap: 0.2rem;

            transition: 0.3s ease;

            &:hover {
                background-color: var(--background);
                color: #fff;
            }
        }

        .email {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.25rem;
            padding: 0.5rem;
            border: 1px solid #000;
            transition: 0.3s ease;

            background-color: transparent;

            &:hover {
                background-color: #000;
                color: var(--green);
            }
        }
    }
`;