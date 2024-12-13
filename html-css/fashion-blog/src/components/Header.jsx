// Header.jsx
import Nav from "./Nav";
import React from "react";

function Header() {
	return (
		<header className="header-container">
			<h1>Sartre's List</h1>
			<h2>Better-Dressed People</h2>
			<Nav />
		</header>
	);
}

export default Header;
