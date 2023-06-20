import placeHolder from "./photos/placeholder.png";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
export default function Project({
	title,
	image = placeHolder,
	description,
	skills,
	gitLink,
	projectLink,
}) {
	return (
		<div className="m-flex mb-5 text-box col-xl-6 col-md-12  project-border  ">
			{" "}
			<img src={image} alt="placeholder" className="  card-img-top "></img>
			<h3 className="card-title">{title}</h3>
			<p className="card-text">
				{description.split("\n").map((line, index) => (
					<React.Fragment key={index}>
						{line}
						<br />
					</React.Fragment>
				))}
				<br />
				Skills Used: {skills}
				<br />
				Github :{" "}
				<a href={gitLink} target="_blank">
					{" "}
					Link
				</a>
				<br />
				Project :
				{projectLink ? (
					<a href={projectLink} target="_blank">
						{" "}
						Link
					</a>
				) : (
					" Coming Soon"
				)}
				<br />
			</p>
		</div>
	);
}
