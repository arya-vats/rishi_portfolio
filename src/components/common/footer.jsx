import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/extras">Extras</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="https://drive.google.com/file/d/1if2ani6w4qr_vnOfvqQS8VUW4E1Rt_dh/view?usp=sharing">Resume</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2023 Arya Vats.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
