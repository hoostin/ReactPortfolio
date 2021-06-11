import Navbar from "react-bootstrap/Navbar";
import { Button, Nav, FormControl, Form, NavDropdown } from "react-bootstrap";
export default function NavBar() {
	return (
		<header className="text-white ">
			<Navbar
				collapseOnSelect
				bg="transparent"
				expand="lg"
				variant="dark"
				className="text-white container"
			>
				<Navbar.Brand href="#top" className="text-white nav-bar-item">
					<h1> Austin Mckee</h1>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="navbar-light nav-bar "
				>
					<Nav className="mr-auto text-white">
						<Nav.Link className="text-white nav-bar-item" href="#top">
							<span className="nav-bar-item"> Home</span>
						</Nav.Link>
						<Nav.Link className="text-white nav-bar-item" href="#about">
							<span className="nav-bar-item"> About</span>
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link className="text-white nav-bar-item " href="#portfolio">
							<span className="nav-bar-item"> Portfolio</span>
						</Nav.Link>
						<Nav.Link
							className="text-white nav-bar-item"
							eventKey={2}
							href="#contact"
						>
							<span className="nav-bar-item"> Contact</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
		// <header className="text-white">
		// 	<nav className="container">
		// 		<div className="row ">
		// 			<h1 className="col-4">Austin Mckee</h1>

		// 			<ul className="col-8 " id="navMenu">
		// 				<li>
		// 					<a href="#top">Home</a>
		// 				</li>
		// 				<li>
		// 					<a href="#about">About</a>
		// 				</li>
		// 				<li>
		// 					<a href="#portfolio">Portfolio</a>
		// 				</li>
		// 				<li>
		// 					<a href="#contact">Contact</a>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</nav>
		// </header>
	);
}
