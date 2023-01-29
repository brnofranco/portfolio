import "./styles/global.css";

import { Header } from "./components/Header";
import { About } from "./components/About";
import { Knowledge } from "./components/Knowledge";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { ScrollToTopButton } from "./components/ScrollToTop";

export function App() {
	return (
		<>
			<Header />
			<main className="flex flex-col ml-percent20 mobile:ml-0">
				<About />
				<Knowledge />
				<Certifications />
				<Projects />
				<ScrollToTopButton />
			</main>
		</>
	);
}
