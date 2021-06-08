import placeHolder from "./photos/placeholder.png";
export default function Project({
	title,
	image = placeHolder,
	description,
	skills,
	gitLink,
	projectLink,
}) {
	return (
		<div className=" mb-5 text-box col-xl-5 col-md-12">
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
