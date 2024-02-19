import Hamburger from "hamburger-react";

import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { ContactNav } from "./styles";

export function Header() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			{showSidebar && <Sidebar />}

			<ContactNav>
				<button className="hamburguer-button">
					<Hamburger toggled={showSidebar} toggle={setShowSidebar} />
				</button>
				<p>brnofranco</p>
				<button className="toggle-dark-mode"></button>
			</ContactNav>
		</>
	);
}
