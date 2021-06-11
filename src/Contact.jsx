import Linkedin from "./photos/Linkedin.png";
export default function Contact() {
	return (
		<section className="container mt-5 " id="contact">
			<div className=" row  text-white">
				<article className="text-box ">
					<h2>Contact</h2>
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
							<button className="btn btn-success" type="submit">
								Submit
							</button>
						</form>
					</div>
					<div className="mt-3">
						<a
							href="https://www.linkedin.com/in/the-austin-mckee/"
							target="_blank"
						>
							<img src={Linkedin} width="64px"></img>
						</a>
					</div>
				</article>
			</div>
		</section>
	);
}
