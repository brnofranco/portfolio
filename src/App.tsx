import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Header } from "./components/Header";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { ScrollToTop } from "./components/ScrollToTop";
import { Sidebar } from "./components/Sidebar";
import useCheckMobileScreen from "./hooks/useCheckMobileScreen";
import { Layout } from "./styles/layout";

export function App() {
	const isMobile = useCheckMobileScreen();

	return (
		<>
			<ScrollToTop />
			{isMobile ? <Header /> : <Sidebar />}
			<Layout>
				<About />
				<Knowledge />
				<Certifications />
				<Projects />
			</Layout>
		</>
	);
}
