// Article.jsx
import React from "react";

function Article({ date, title, image, content }) {
	return (
		<article className="article-container">
			<h4 className="article-date">{date}</h4>
			<h2 className="article-title">{title}</h2>
			<img src={image} alt={title} className="article-image" />
			<p
				className="article-content"
				dangerouslySetInnerHTML={{ __html: content }}
			></p>
			<a href="#" className="article-link">
				Continues ...
			</a>
		</article>
	);
}

export default Article;
