import Hamburger from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sidebar } from "../Sidebar";
import { ContactNav } from "./styles";

export function Header() {
	const [showSidebar, setShowSidebar] = useState(false);
	const { i18n } = useTranslation();

	const handleChangeLanguage = (value: string) => {
		i18n.changeLanguage(value);
	};

	return (
		<>
			{showSidebar && <Sidebar />}

			<ContactNav>
				<button>
					<Hamburger toggled={showSidebar} toggle={setShowSidebar} />
				</button>

				<p>Bruno Franco</p>

				<div className="language-select">
					<select
						onChange={(e) => handleChangeLanguage(e.target.value)}
					>
						<option value="pt">PT</option>
						<option value="en">EN</option>
					</select>
				</div>
			</ContactNav>
		</>
	);
}
