// Nav.jsx
import React from "react";

function Nav() {
	return (
		<nav
			aria-label="Main Navigation"
			role="navigation"
			className="nav-container"
		>
			<ul className="nav-list">
				<li>
					<a href="#" className="nav-link">
						Women's
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						Men's
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						On the Street
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						The Catwalk
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						AdWatch
					</a>
				</li>
				<li>
					<a href="#" className="nav-link">
						About
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
