import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src="https://media.licdn.com/dms/image/v2/C4E03AQFb629Ux9o6cQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1610014741949?e=1757548800&v=beta&t=d6qUWfLL6XM31-HqHcgCEvWvC4LOC0OQLn5MNoYzIPM" alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
