import { useTranslation } from "react-i18next";
import { SectionContainer } from "./styles";
import { FaDotCircle } from "react-icons/fa";

export function Knowledge() {
	const { t } = useTranslation();

	return (
		<SectionContainer id="knowledge">
			<h2>Bom, agora posso te contar minha história.</h2>

			<div className="stacks-container">
				<ul>
					<li>
						<div className="timeline-time">2009</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>
								Utilizo o computador diariamente desde 2009,
								quando eu tinha 6 anos, meu pai era técnico de
								informática e eu tinha o privilegio de ter um
								computador em casa. Com aquela idade eu
								basicamente utilizava o computador para jogos em
								Flash, no qual era bem viciado. E nessa época o
								mouse ficava na esquerda, por isso meu costume
								kk.
							</p>
						</div>
					</li>
					<li>
						<div className="timeline-time">2017</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>
								Apesar de utilizar bastante o computador, meu
								primeiro contato com programação, ou quase
								programação, foi em 2017, quando tive aulas de
								Scratch na escola. Fiz um jogo 2D no qual
								controlamos um peixe que precisa fugir de um
								tubarão.
							</p>
						</div>
					</li>
					<li>
						<div className="timeline-time">2018</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>
								Passei no curso de informatica para internet da
								ETECVAV e comecei a aprender a programar de
								verdade Aprendi lógica nas linguagens VisualG,
								C, JavaScript, PHP e C#. Mas meu foco foi em
								desenvolvimento front-end, com HTML, CSS,
								JavaScript, Bootstrap e JQuery.
							</p>
						</div>
					</li>
					<li>
						<div className="timeline-time">2021</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>
								Em 2021 dei sequencia na formação CPS
								ingressando na FATEC Jundiaí no curso de ADS,
								aprofundei em Est. de Dados e Algoritmo, Banco
								de Dados, Engenharia de Software, Java.
							</p>
							<p>
								No mesmo ano comecei a estagiar, primeiro na
								Ottech como desenvolvedor de ERP Sage.
							</p>
						</div>
					</li>
					<li>
						<div className="timeline-time">2022</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>
								No estágio atuei majoritariamente como front
								React (Next), fazia telas de um sistema interno
								que estava substituindo planilhas de Excel. Fui
								efetivado e passei a trabalhar com Node, conheci
								novos conceitos de projeto com monitoria,
								microsserviços, mensageria, backoffice etc
							</p>
						</div>
					</li>
					<li>
						<div className="timeline-time">2023</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>efetivado...</p>
						</div>
					</li>
					<li>
						<div className="timeline-time">2024...</div>
						<div className="timeline-icon">
							<FaDotCircle size={26} />
						</div>
						<div className="timeline-body">
							<p>promovido a pleno...</p>
							<p>to be continue...</p>
						</div>
					</li>
				</ul>
			</div>
		</SectionContainer>
	);
}
