import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileSquare from "./photos/profile_square1.jpg";
export default function Home() {
	return (
		<section className="container">
			<Jumbotron>
				{/* <div className="container"> */}
				<div className=" row ">
					<div className=" text-white col-md-12 col-lg-6 col-xl-6 ">
						<img
							className=" text-white img-fluid col-12 "
							src={profileSquare}
							alt="Picture of a guy named Austin Mckee"
						></img>
					</div>
					<article className=" text-white col-md-12 col-lg-6 col-xl-6 text-box">
						<h2>Hello World, I am Austin Mckee</h2>
						<p>
							I am currently located in the Portland metro area where I was born
							and raised.
						</p>
						<p>
							{" "}
							Some background on me: <br></br>I am a former Portland State
							Student that studied Computer Science and has the equivalent
							credits to a Computer Science minor. I graduated ThinkFul
							Engineering Immersion program in 2021 where I learned full-stack
							development in the PERN Stack (Postgres, Express, React, Node).
							During that period, I worked as a Software Engineer at Raedam, a
							startup aiming to revolutionize parking management. I currently
							work for Skillz as a SDK Engineer a company that is promoting
							competition through skill-based gaming for real world prizes.
						</p>
					</article>
					{/* </div> */}
				</div>
			</Jumbotron>
		</section>
	);
}
