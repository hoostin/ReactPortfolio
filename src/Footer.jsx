import Linkedin from "./photos/Linkedin.png";
import Github from "./photos/Github.png";
import Resume from "./photos/pdflogo.jpg";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div className="mt-3 contact-format text-white ">
			<Link
				to={{
					pathname: "https://www.linkedin.com/in/the-austin-mckee/",
				}}
				target="_blank"
				className="contact-link "
			>
				<img className="m-3" src={Linkedin} width="64px"></img>
			</Link>
			<Link
				to={{
					pathname: "https://github.com/hoostin",
				}}
				target="_blank"
				className="contact-link mt-5"
			>
				<img className="m-3" src={Github} width="64px"></img>
			</Link>
			<Link
				to={"/Austin-Mckee-Resume-2023.pdf"}
				target="_blank"
				className="contact-link mt-5"
				download
			>
				<img className="m-3" src={Resume} width="64px"></img>
			</Link>
			austinmckee@hotmail.com
		</div>
	);
}
