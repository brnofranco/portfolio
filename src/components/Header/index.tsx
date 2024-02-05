import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import meImage from "../../assets/me.png";
import { ContactNav, HeaderContainer } from "./styles";

export function Header() {
	const [profileIsOpen, setProfileIsOpen] = useState(false);
	const imageSize = "200px";
	const iconSize = "24";

	const toggleMobileProfile = () =>
		window.innerWidth <= 1080
			? setProfileIsOpen(false)
			: setProfileIsOpen(true);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const copyEmailToClipBoard = () => {
		navigator.clipboard.writeText("brunofrancodemoraes@gmail.com");
		toast.success("E-mail copiado!");
	};

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
				<div className="navigation-data">
					<div className="image-container">
						<img
							src={meImage}
							width={imageSize}
							height={imageSize}
							className="profile-image"
							alt="Foto Bruno Franco de Moraes"
						/>
					</div>

					<div className="nav-container">
						<button onClick={() => scrollToSection("about")}>
							Sobre
						</button>
						<button onClick={() => scrollToSection("knowledge")}>
							Experiência
						</button>
						<button
							onClick={() => scrollToSection("certifications")}
						>
							Certificados
						</button>
						<button onClick={() => scrollToSection("projects")}>
							Projetos
						</button>
						<button onClick={() => scrollToSection("curriculum")}>
							CV
						</button>
					</div>
				</div>

				<div className="contact-container">
					<a
						href="https://www.linkedin.com/in/brunofmoraes/"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineLinkedin size={iconSize} />
					</a>
					<a
						href="https://github.com/brnofranco"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGithub size={iconSize} />
					</a>
					<button
						className="email"
						onClick={copyEmailToClipBoard}
						title="Copiar email"
					>
						<MdEmail size={iconSize} />
					</button>
				</div>
			</HeaderContainer>
		</>
	);
}
