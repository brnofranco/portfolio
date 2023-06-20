interface ProjectCardProps {
	description: string;
	title: string;
	deploy: string;
	repository: string;
}

export default function Card({
	description,
	title,
	deploy,
	repository,
}: ProjectCardProps) {
	return (
		<div
			id="ProjectCardContainer"
			className="w-2/5 flex flex-col justify-center items-center gap-2 p-4 bg-grayBackground border-4 border-solid border-customGreen mobile:w-full"
		>
			<h3 className="text-title font-semibold text-xl">{title}</h3>
			<p className="text-center text-text mobile:font-sm">
				{description}
			</p>
			<div className="flex gap-4">
				<a
					target="_blank"
					href={`https://github.com/brnofranco/${repository}`}
					rel="noreferrer"
					className="bg-customGreen rounded-md border-1 border-solid border-customGreen font-semibold text-grayBackground p-2 min-w-16 text-center text-lg transition-all ease-in duration-300 hover:bg-secondaryBackground hover:text-customGreen"
				>
					Repositório
				</a>
				{!!deploy && (
					<a
						target="_blank"
						href={deploy}
						rel="noreferrer"
						className="bg-customGreen rounded-md border-1 border-solid border-customGreen font-semibold text-grayBackground p-2 min-w-16 text-center text-lg transition-all ease-in duration-300 hover:bg-secondaryBackground hover:text-customGreen"
					>
						Site
					</a>
				)}
			</div>
		</div>
	);
}
