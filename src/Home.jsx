import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileSquare from "./photos/profile_square.jpg";
export default function Home() {
	return (
		<section className="container">
			<Jumbotron>
				{/* <div className="container"> */}
				<div className=" row col-12">
					<div className=" text-white col-xl-6 col-lg-12">
						<img
							className=" text-white col-12 "
							src={profileSquare}
							alt="test pic"
						></img>
					</div>
					<article className=" text-white col-xl-6 col-lg-12 text-box">
						<h2>Hello World, I am Austin Mckee</h2>
						<p>
							I am currently located in the Portland, Oregon metro area. I was
							born and raised in Oregon, I grew up in the Tigard Tualatin School
							District. I graduated from Tigard High School in 2017 and have
							stayed in Oregon since then.
						</p>
						<p>
							{" "}
							Some background on me: <br></br>I am a former Portland State
							Student that studied Computer Science and has the equivalent
							credits to a Computer Science minor. I recently graduated ThinkFul
							Engineering Immersion program where I learned full-stack
							development in the PERN Stack (Postgres, Express, React, Node).
							Current Lead Software Engineer for Startup{" "}
							<a href="https://www.raedam.co/services" target="_blank">
								Raedam
							</a>{" "}
							which is a company that provides a modern solution to how people
							find parking.
						</p>
					</article>
					{/* </div> */}
				</div>
			</Jumbotron>
		</section>
	);
}
