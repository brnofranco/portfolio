import aboutImage from "../../assets/about.svg";

export function About() {
	return (
		<section className="w-4/5 my-0 mx-auto h-screen p-8 flex flex-row items-center justify-center gap-8 mobile:flex-col">
			<div className="flex flex-1 flex-col gap-8 mobile:flex-none">
				<h1 className="text-title font-semibold text-3xl">
					Muito prazer, sou <br />
					<strong className="text-customGreen text-5xl">
						Bruno Franco de Moraes
					</strong>
				</h1>

				<p className="text-text text-lg">
					Busco aprendizado constante na minha carreira como
					desenvolvedor para, futuramente, me tornar um desenvolvedor
					Fullstack.
				</p>
			</div>
			<div className="flex justify-center items-center flex-1 mobile:flex-none">
				<img
					src={aboutImage}
					className="w-full h-fixed400"
					alt="rapaz programador"
				/>
			</div>
		</section>
	);
}
