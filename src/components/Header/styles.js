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

    left: fixed;

    h3 {
        color: var(--headerTitle);
        border-bottom: 1px solid black;
        font-size: 1.15rem;
    }

    p {
        color: var(--headerText);
    }


    .profile-image {
        border-radius: 50%;
    }
    
    .profile-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
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
            text-align: center;
            transition: 0.3s ease;

            &:hover {
                background-color: #111;
                color: #fff;
            }
        }

        .email {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border: 1px solid black;
        }
    }
`;