import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";
import "./App.css";

function App() {
	const articles = [
		{
			date: "11/12/20",
			title: "On the Street in Brooklyn",
			image: "/images/blog-image-1.jpg",
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat veniam reiciendis architecto rem, amet blanditiis nam.`,
		},
		{
			date: "11/11/20",
			title: "Vintage in Vogue",
			image: "/images/blog-image-2.jpg",
			content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam dicta error rem repellendus iusto voluptatem.`,
		},
	];

	return (
		<div>
			<Header />
			<main>
				{articles.map((article, index) => (
					<Article key={index} {...article} />
				))}
			</main>
			<Footer />
		</div>
	);
}

export default App;
