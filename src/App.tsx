import { Layout } from "./styles/layout";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Knowledge } from "./components/Knowledge";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { ScrollToTop } from "./components/ScrollToTop";

export function App() {
	return (
		<>
			<Header />
			<Layout>
				<About />
				<Knowledge />
				<Certifications />
				<Projects />
				<ScrollToTop />
			</Layout>
		</>
	);
}
