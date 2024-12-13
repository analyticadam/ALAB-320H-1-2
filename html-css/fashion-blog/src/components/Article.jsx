import React from "react";

function Article({ date, title, image, content }) {
	return (
		<article>
			<h4>{date}</h4>
			<h2>{title}</h2>
			<img src={image} alt={title} />
			<p>{content}</p>
			<a href="#">Continues ...</a>
		</article>
	);
}

export default Article;
