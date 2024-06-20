import Hamburger from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sidebar } from "../Sidebar";
import { ContactNav } from "./styles";
import brazilianFlag from "../../assets/countries/br.svg";
import usaFlag from "../../assets/countries/usa.svg";

interface NextLanguageData {
	iconNextLanguage: string;
	alt: string;
	nextLanguage: string;
}

export function Header() {
	const [showSidebar, setShowSidebar] = useState(false);
	const { i18n } = useTranslation();

	const selectedLanguage = i18n.language as "pt" | "en";

	const changeLanguageData: Record<"pt" | "en", NextLanguageData> = {
		pt: {
			iconNextLanguage: usaFlag,
			alt: "Bandeira dos Estados Unidos",
			nextLanguage: "en",
		},
		en: {
			iconNextLanguage: brazilianFlag,
			alt: "Bandeira do Brasil",
			nextLanguage: "pt",
		},
	};

	const nextLanguage = changeLanguageData[selectedLanguage];

	const handleChangeLanguage = () => {
		i18n.changeLanguage(nextLanguage.nextLanguage);
	};

	return (
		<>
			{showSidebar && <Sidebar />}

			<ContactNav>
				<button className="hamburger">
					<Hamburger toggled={showSidebar} toggle={setShowSidebar} />
				</button>

				<p>Bruno Franco</p>

				<button
					onClick={handleChangeLanguage}
					className="change-language"
				>
					<img
						src={nextLanguage.iconNextLanguage}
						width={40}
						alt={nextLanguage.alt}
					/>
				</button>
			</ContactNav>
		</>
	);
}
