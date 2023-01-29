/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		extend: {
			colors: {
				background: "#16161A",
				secondaryBackground: "#1B1B20",
				text: "#94A1B2",
				title: "#FFFFFE",
				customGreen: "#2CB67D",
				headerTitle: "#010101",
				headerText: "#222222",
				grayBackground: "#111111",
			},
			margin: {
				percent20: "20%",
			},
			screens: {
				mobile: { raw: "(max-width: 1080px)" },
			},
			width: {
				fixed400: "400px",
			},
			height: {
				fixed400: "400px",
			},
			inset: {
				percent1: "1%",
			},
			boxShadow: {
				scrollToTopButton: "3px 3px 6px rgba(0, 0, 0, 0.5)",
				mobileScrollToTopButton: "1px 1px 3px rgba(0, 0, 0, 0.5)",
			},
			borderRadius: {
				percent50: "50%",
			},
			minWidth: {
				16: "5.5rem",
			},
		},
	},
	plugins: [],
};
