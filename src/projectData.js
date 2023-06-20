import parkingManager from "./photos/parkingManager.png";
import dashboard from "./photos/Dashboard.png";
import flashcards from "./photos/flashcards.jpg";
import portfolio from "./photos/portfolio.png";
export const projects = [
	{
		title: "Parking Manager",
		image: parkingManager,
		description: `Web appication to manage a parking stucture in realtime.\n Use Guest Login:\n Email: guest@ryankirkpatrick.net\n Password: guest1234`,
		skills: "React/Bootstrap/Css",
		gitLink: "https://github.com/RKirkpatrick/Generic-Sensor-Display",
		projectLink: "https://parking.ryankirkpatrick.net/",
	},
	{
		title: "Periodic Tables",
		image: dashboard,
		description: `This  is a full stack application that models a reservation system for a restaurant.
        This application gives the ability to manage both tables and reservations.`,
		skills: "PERN stack (Postgress, Express, React, Node)",
		gitLink: "https://github.com/hoostin/FinalProject",
		projectLink: "https://final-project-frontend-sigma.vercel.app/dashboard",
	},
	{
		title: "Flashcards",
		image: flashcards,
		description: `Web application that allows you to create and manage decks of flashcards.`,
		skills: "React/Bootstrap",
		gitLink: "https://github.com/hoostin/Flashcards",
		projectLink: null,
	},
	{
		title: "Portfolio Website",
		image: portfolio,
		description: `Who doesn't love a fun recursion easter egg.`,
		skills: "React/Bootstrap/Css",
		gitLink: "https://github.com/hoostin/ReactPortfolio",
		projectLink: "//www.austinmckee.net",
	},
];
