import { useEffect, useState } from "react";
import { ScrollToTopButton } from "./styles";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () =>
		window.scrollY > 250 ? setIsVisible(true) : setIsVisible(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<ScrollToTopButton>
			<BsFillArrowUpCircleFill
				className="icon"
				onClick={scrollToTop}
				opacity={isVisible ? "1" : "0"}
				cursor={isVisible ? "pointer" : "default"}
			/>
		</ScrollToTopButton>
	);
}
