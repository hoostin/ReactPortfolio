import Linkedin from "./photos/Linkedin.png";
import Github from "./photos/Github.png";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<div className="mt-3 contact-format text-white ">
			<Link
				to={{
					pathname: "https://www.linkedin.com/in/the-austin-mckee/",
				}}
				target="_blank"
				className="contact-link"
			>
				<img src={Linkedin} width="64px"></img>
			</Link>
			<Link
				to={{
					pathname: "https://github.com/hoostin",
				}}
				target="_blank"
				className="contact-link"
			>
				<img src={Github} width="64px"></img>
			</Link>
			austinmckee@hotmail.com
		</div>
	);
}
