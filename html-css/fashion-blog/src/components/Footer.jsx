// Footer.jsx
import React from "react";

function Footer() {
	return (
		<footer className="footer-container">
			<nav aria-label="Footer Navigation" role="navigation">
				<ul className="footer-nav">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Women's</a>
					</li>
					<li>
						<a href="#">Men's</a>
					</li>
					<li>
						<a href="#">On the Street</a>
					</li>
					<li>
						<a href="#">The Catwalk</a>
					</li>
					<li>
						<a href="#">AdWatch</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Tips</a>
					</li>
				</ul>
			</nav>
			<p className="footer-copyright">&#169; 2013 Valet Industries, Inc</p>
		</footer>
	);
}

export default Footer;
