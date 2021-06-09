import placeHolder from "./photos/placeholder.png";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Project({
	title,
	image = placeHolder,
	description,
	skills,
	gitLink,
	projectLink,
}) {
	return (
		<div className="m-flex mb-5 text-box col-xl-6 col-md-12  ">
			{" "}
			<img src={image} alt="placeholder" className="  card-img-top "></img>
			<h3 className="card-title">{title}</h3>
			<p className="card-text">
				{description}
				<br />
				Skills Used: {skills}
				<br />
				Github Link:{" "}
				<a href={gitLink} target="_blank">
					{" "}
					Link
				</a>
				<br />
				Project Link:
				<a href={projectLink} target="_blank">
					Link
				</a>
				<br />
			</p>
		</div>
	);
}
