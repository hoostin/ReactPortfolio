import Project from "./Project";
import { projects } from "./projectData";
export default function Portfolio() {
	return (
		<section className="container mt-5" id="portfolio">
			<div className=" row col-12 text-white">
				<article className="text-box ">
					<h2>Portfolio/Projects</h2>
					{projects.map((theProject) => (
						<Project
							title={theProject.title}
							image={theProject.image ? theProject.image : undefined}
							description={theProject.description}
							skills={theProject.skills}
							gitLink={theProject.gitLink}
							projectLink={theProject.projectLink}
						/>
					))}
				</article>
			</div>
		</section>
	);
}
