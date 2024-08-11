const experiences = [
	{
		title: "Estágio em Qualidade de Software",
		company: "Superintendência de Tecnologia da Informação - UFBA",
		period: "Fev 2022 - Fev 2024",
		description:
			"Automatização de testes de software para garantir a qualidade do sistema de recursos humanos.",
		technologies: ["Java", "Selenium", "JUnit"],
	},
	{
		title: "Desenvolvedor Full-Stack",
		company: "InfoJr UFBA",
		period: "Mar 2020 - Nov 2022",
		description:
			"Desenvolvimento de aplicações web para os mais diversos clientes. Atuação em várias áreas de desenvolvimento, como front-end, back-end, dev-ops, e de gerenciamento.",
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"NestJS",
		],
	},
];

export default function Experiences() {
	return (
		<section className="flex flex-col">
			<h2 className="text-6xl">Experiências</h2>
			{experiences.map((experience) => (
				<div
					key={experience.title}
					className="p-8 rounded-md hover:bg-white/20 hover:shadow-[0_4px_30px_rgba(0, 0, 0, 0.1)] backdrop-blur-lg border border-black hover:border-white/10"
				>
					<p>{experience.period}</p>
					<h3 className="text-4xl font-bold">{experience.title}</h3>
					<h4 className="text-2xl">{experience.company}</h4>
					<p>{experience.description}</p>
					<ul className="flex flex-wrap gap-4 mt-4">
						{experience.technologies.map((tech) => (
							<li key={tech} className="bg-white/20 px-3 rounded-xl">
								{tech}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
