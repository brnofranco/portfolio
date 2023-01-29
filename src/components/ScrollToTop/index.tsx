import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(window.scrollY > 250);

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
		<>
			{isVisible && (
				<div
					id="ScrollToTopButton"
					className="cursor-pointer transition-all ease-in-out duration-1000 fixed bottom-12 right-12 w-14 h-14 mobile:bottom-3 mobile:right-3 mobile:w-10 mobile:h-10"
				>
					<BsFillArrowUpCircleFill
						className="h-full w-full text-customGreen rounded-percent50 shadow-scrollToTopButton mobile:shadow-mobileScrollToTopButton"
						onClick={scrollToTop}
					/>
				</div>
			)}
		</>
	);
}
