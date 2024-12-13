// App.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";
import "./App.css";

function App() {
	const articles = [
		{
			date: "11/12/20",
			title: "On the Street in Brooklyn",
			image: "/blog-image-1.jpg",
			content: `<span>C</span>ray Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat veniam reiciendis architecto rem, amet blanditiis nam, quas ut voluptatem sequi accusantium asperiores deserunt debitis repellat ullam enim. Veritatis, numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloribus fugiat a quis sunt, corrupti exercitationem sit porro tenetur! Harum perferendis officia unde rerum sed aliquam iusto repellat ullam. Facere.`,
		},
		{
			date: "11/11/20",
			title: "Vintage in Vogue",
			image: "/blog-image-2.jpg",
			content: `<span>S</span>ray Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam dicta error rem repellendus iusto voluptatem at consequuntur, mollitia quo incidunt amet numquam autem tempore iure deserunt minima dolore velit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore illo porro laboriosam. Quod vitae dolorem nihil cumque nobis tenetur laboriosam, ea deserunt veniam quam iure nisi sint neque odio recusandae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit in laborum provident adipisci consequatur, aspernatur voluptate a, placeat atque qui animi ipsa vero laudantium nostrum deserunt eveniet vitae rerum ullam.`,
		},
	];

	return (
		<div className="app-container">
			<Header />
			<main className="articles-section">
				{articles.map((article, index) => (
					<Article key={index} {...article} />
				))}
			</main>
			<Footer />
		</div>
	);
}

export default App;
