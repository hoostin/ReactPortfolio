import Project from "./Project";
import { projects } from "./projectData";
export default function Portfolio() {
	return (
		<section className="container mt-5 " id="portfolio">
			<div className=" row  text-white">
				<article className="text-box ">
					<h2>Portfolio/Projects</h2>
					<div className="row">
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
					</div>
				</article>
			</div>
		</section>
	);
}
