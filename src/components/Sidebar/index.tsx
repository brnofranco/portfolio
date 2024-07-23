import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import meImage from "../../assets/me.png";
import { HeaderContainer } from "./styles";

export function Sidebar() {
	const { t } = useTranslation();
	const iconSize = "32";

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

	return (
		<>
			<Toaster />
			<HeaderContainer>
				<div className="image-nav-container">
					<div className="image-container">
						<img
							src={meImage}
							className="profile-image"
							alt="Foto Bruno Franco de Moraes"
						/>
					</div>

					<div className="nav-container">
						<button onClick={() => scrollToSection("about")}>
							{t("sidebar.about")}
						</button>
						<button onClick={() => scrollToSection("knowledge")}>
							{t("sidebar.knowledge")}
						</button>
						<button
							onClick={() => scrollToSection("certifications")}
						>
							{t("sidebar.certifications")}
						</button>
						<button onClick={() => scrollToSection("projects")}>
							{t("sidebar.projects")}
						</button>
					</div>
				</div>

				<div className="contact-container">
					<a
						href="https://www.linkedin.com/in/brunofmoraes/"
						target="_blank"
						rel="noreferrer"
						title="LinkedIn"
					>
						<AiOutlineLinkedin size={iconSize} />
					</a>
					<a
						href="https://github.com/brnofranco"
						target="_blank"
						rel="noreferrer"
						title="GitHub"
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
