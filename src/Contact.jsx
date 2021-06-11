import Linkedin from "./photos/Linkedin.png";
import Github from "./photos/Github.png";
import { Link } from "react-router-dom";
export default function Contact() {
	return (
		<section className="container mt-5 " id="contact">
			<div className=" row  text-white">
				<article className="text-box ">
					<h2>Contact Form</h2>
					<div className="row">
						<form action="https://formspree.io/f/mqkgorlk" method="POST">
							<label for="user-name">Name:</label>
							<input
								id="user-name"
								className="form-control"
								type="text"
								name="name"
							/>

							<label for="user-email">Email:</label>
							<input
								className="form-control"
								id="user-email"
								type="text"
								name="email"
							/>

							<label for="user-message">Your message:</label>
							<textarea
								className="form-control"
								id="user-message"
								name="message"
							></textarea>
							<button className="mt-2 btn btn-success" type="submit">
								Submit
							</button>
						</form>
					</div>
					
				</article>
			</div>
		</section>
	);
}
