import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Hamburger from "hamburger-react";
import { MdEmail } from "react-icons/md";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import { ContactNav, HeaderContainer } from "./styles";
import meImage from "../../assets/me.png";

export function Header() {
	function copyEmailToClipBoard() {
		navigator.clipboard.writeText("brunofrancodemoraes@gmail.com");
		toast.success("E-mail copiado!");
	}

	const [profileIsOpen, setProfileIsOpen] = useState(false);
	const imageSize = "200px";

	const toggleMobileProfile = () =>
		window.innerWidth <= 1080
			? setProfileIsOpen(false)
			: setProfileIsOpen(true);

	useEffect(() => {
		window.addEventListener("load", toggleMobileProfile);
		return () => {
			window.removeEventListener("load", toggleMobileProfile);
		};
	}, []);

	return (
		<>
			<div>
				<Toaster />
			</div>
			<ContactNav>
				<div className={profileIsOpen ? "" : "background-color"}>
					<button onClick={() => setProfileIsOpen(!profileIsOpen)}>
						<Hamburger
							toggled={profileIsOpen}
							toggle={setProfileIsOpen}
						/>
					</button>
				</div>
			</ContactNav>
			<HeaderContainer
				height={profileIsOpen ? "100vh" : "0"}
				display={profileIsOpen ? "flex" : "none"}
				tabTransition={
					profileIsOpen && window.innerWidth > 1080
						? "0"
						: "0.3s ease"
				}
			>
				<div className="image-container">
					<img
						src={meImage}
						width={imageSize}
						height={imageSize}
						className="profile-image"
						alt="Foto Bruno Franco de Moraes"
					/>
				</div>

				<div className="profile-container">
					<h3>PERFIL</h3>
					<strong>
						Brasileiro, solteiro, 18 anos <br />
						Jundiaí, São Paulo, Brasil
					</strong>
				</div>

				{/* <div className="nav-container">
                <h3>ME CONHEÇA</h3>
                <Link href="#about">Sobre</Link>
                <Link href="/#certifications">Cursos</Link>
                <Link href="/#knoledge">Conhecimentos</Link>
                <Link href="/#projects">Projetos</Link>
            </div> */}

				<div className="contact-container">
					<h3>CONTATO</h3>
					<a
						href="https://www.linkedin.com/in/brunofmoraes/"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineLinkedin size="16" />
						<strong>LinkedIn</strong>
					</a>
					<a
						href="https://github.com/brnofranco"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGithub size="16" />
						<strong>GitHub</strong>
					</a>
					<button
						className="email"
						onClick={copyEmailToClipBoard}
						title="Copiar email"
					>
						<MdEmail size="15" />
						<strong>E-mail profissional</strong>
					</button>
				</div>
			</HeaderContainer>
		</>
	);
}
