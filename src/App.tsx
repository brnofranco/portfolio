import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Curriculum } from "./components/Curriculum";
import { Header } from "./components/Header";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { ScrollToTop } from "./components/ScrollToTop";
import { Layout } from "./styles/layout";

export function App() {
	return (
		<>
			<Header />
			<Layout>
				<About />
				<Knowledge />
				<Certifications />
				<Projects />
				<Curriculum />
				<ScrollToTop />
			</Layout>
		</>
	);
}
