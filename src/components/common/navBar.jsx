import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";
// import { useEffect, useState } from "react";
import "../../index.css";

const NavBar = (props) => {
	// const [darkMode, setDarkMode] = useState(false);
	const { active } = props;

	// const toggleDarkMode = () => {
	// 	setDarkMode(!darkMode);
	// };

	// useEffect(() => {
	// 	if (darkMode) {
	// 		document.body.classList.add("dark-mode");
	// 	} else {
	// 		document.body.classList.remove("dark-mode");
	// 	}
	// }, [darkMode]);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								{/* <button
									className="btn btn-danger"
									onClick={toggleDarkMode}
								>
									{darkMode
										? "Switch to Light Mode"
										: "Switch to Dark Mode"}
								</button> */}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
