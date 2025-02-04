import React from "react";

export default function Button({ text, href, target }) {
	return (
		<a
			className="contact-link link"
			href={href}
			target={target}
			rel="noreferrer"
		>
			<span className="">{text}</span>
		</a>
	);
}
