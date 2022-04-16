import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    width: 20%;
    height: ${(props) => props.height};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    background-color: var(--green);
    padding: 1rem;

    transition: ${(props) => props.tabTransition};

    h3 {
        color: var(--headerTitle);
        border-bottom: 1px solid black;
        font-size: 1.15rem;
    }

    .image-container {
        width: 100%;
        display:${(props) => props.display};
        justify-content: center;

        .profile-image {
            border-radius: 100%;
        }
    }
    
    .profile-container {
        display:${(props) => props.display};
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

    .nav-container {
        display:${(props) => props.display};
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        
    }

    .contact-container {
        display:${(props) => props.display};
        flex-direction: column;
        gap: 0.5rem;

        width: 100%;
        transition: 0.5s ease;

        a {
            width: 100%;
            padding: 0.5rem 0;
            background-color: #000;
            color: #bbb;
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;

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

            strong {
                font-size: 0.9rem;
            }

            &:hover {
                background-color: #000;
                color: var(--green);
            }
        }
    }

    @media (max-width: 1080px) {
        width: 100%;
        position: fixed;
        z-index: 10;

        h3 {
            font-size: 2rem;
        }

        .profile-container {
            strong {
                font-size: 1.4rem;
            }

            p, li {
                font-size: 1.2rem;
            }
        }

        .contact-container {
            a {
                padding: 1rem 0;
            }

            .email {
                padding: 1rem 0;

                strong {
                    font-size: 1rem;
                }
            }
        }
    }
`;

export const ContactNav = styled.div`
    display: none;

    @media (max-width: 1080px) {
        position: fixed;
        display: flex;
        justify-content: flex-end;
        z-index: 11;
        width: 100%;

        button {
            border: 0;
            background: inherit;
            right: 1%;
        }

        .background-color {
            background-color: var(--green);
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
`;