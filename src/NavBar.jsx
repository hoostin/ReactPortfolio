export default function NavBar() {
	return (
		<header className="text-white">
			<nav className="container">
				<div className="row ">
					<h1 className="col-4">Austin Mckee</h1>

					<ul className="col-8 " id="navMenu">
						<li>
							<a href="#top">Home</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
