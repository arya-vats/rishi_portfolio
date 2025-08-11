import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/D4D0BAQH7-QRkGhZUFw/company-logo_200_200/company-logo_200_200/0/1699160059836?e=1757548800&v=beta&t=qIZsu6n3gzCmPOTU5u-0Ymo2Qsx3XmQWB0uq-mNFlFI"
								alt="pedestal"
								className="work-image"
							/>
							<div className="work-title">Pedestal</div>
							<div className="work-subtitle">
								Corporate Trainer
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C560BAQFaUffEvUCEYg/company-logo_200_200/company-logo_200_200/0/1630635742255/predis_ai_logo?e=1757548800&v=beta&t=eq5nzNfNMxZgYh2FUcRPZxk67U7mSj7Mjs-xagg1_1k"
								alt="predis.ai"
								className="work-image"
							/>
							<div className="work-title">Predis.Ai</div>
							<div className="work-subtitle">
								React Developer
							</div>
						</div>
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4E0BAQFeYfGToFZmUw/company-logo_100_100/company-logo_100_100/0/1634797882526/sarvika_technologies_pvt_ltd__logo?e=1757548800&v=beta&t=g6fH9BeDgi38RPRNXBnkLkXW0Pn1XXTnI8jo8PsyxRU"
								alt="sarvika technologies"
								className="work-image"
							/>
							<div className="work-title">
								Sarvika Technologies
							</div>
							<div className="work-subtitle">
								Javascript Developer
							</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C4E0BAQFQreuANlOgBg/company-logo_100_100/company-logo_100_100/0/1630640544590?e=1757548800&v=beta&t=WUSpm0qBmkyqTlWGxaTbPEv0dZBs-v8uQI9LVmvX1Vs"
								alt="crewbella"
								className="work-image"
							/>
							<div className="work-title">
								CrewBella
							</div>
							<div className="work-subtitle">
								Ex: React.JS Developer
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
