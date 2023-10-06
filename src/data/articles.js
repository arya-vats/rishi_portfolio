import React from "react";

function article_1() {
	return {
		date: "29 September 2023",
		title: "My second drone workshop",
		description:
			"Deep diving into the concepts of drone making and aviation",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://i.ibb.co/Ytmzh3b/IMG-3433.jpg"
						alt="random"
						className="randImage"
					/>
						<br />
						<br />
					I love to explore drones and aviation whenever I find time from work. I do a lot of reading and teaching.

					This was my second workshop that took place at RKGIT, Ghaziabad, as I was invited as a speaker to motivate the young minds into expanding their knowledge domain and build extra projects as well.
					<br />
					Building drones can be challenging and a little overwhelming at first, but with the right mindset and interest, anyone can build their own drone. I have mentored several students to help them build drones.
					Ranging from the software to the hardware, I have taught many students the know-how that goes behind the drones or for that matter any basic aerial vehicle. This workshop started with explanation of why drones are so important,
					what is their scope and how will the government invest an enormous amount of money into the drone industry in the coming years.
					<br />
					<br />
					I started off with this and progressed towards the basic concepts and the components that are required to build your very first drone.
					<br />
					<br />
					<br />
					<img
						src="https://i.ibb.co/LkXpkxb/IMG-3400.jpg"
						alt="random"
						className="randImage"
					/>
						<br />

						<br />
						Slowly and steadily we proceeded towards getting to know the resources that are available on the internet and how to find the right ones. I always recommend every student to read documentation thoroughly because documentation to drones is what internet is to a laptop. You have 
						a machine but without documentation, you cannot perform anything with it.

						<br />
						<br />
						There was a lot of QnA afterwards and the students were amazing, and had a curiosity to learn. That's all what was needed! 😃
						<br />
						<br />
						<br />
						<br />
						<img
						src="https://i.ibb.co/9YwDCsg/IMG-3427.jpg"
						alt="random"
						className="randImage"
					/>

					<br />
					<br />
					<br />

				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "23 September 2022",
		title: "My first drone workshop",
		description:
			"Deep diving into the concepts of drone making and aviation",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://i.ibb.co/p36nFYw/Screenshot-2023-10-06-at-5-50-49-PM.png"
						alt="random"
						className="randImage"
					/>
						<br />
						<br />
					This was my first experience giving lecture in front of such a huge gathering. I have given lectures before, but most of them were in my college, so this was a surprise for me.

					This is where the spark behind PUSHPAK-the drone society of RKGIT was ignited. These were the first set of core students that I mentored and they are the ones who have laid the foundation of their society.
					<br />
					For a workshop to succeed, I believe the students do play an important role. It is the interactivity, the interest, the enthusiasm from students that helped me dive much much deeper into the know-how of drones.
					<br />
					<br />
					What started off as a casual interaction turned out to be such a game changer for both sides as the students were so much curious and interested towards exploring different domain as an expanded domain.
					<br />
					<br />
					<br />
					<img
						src="https://i.ibb.co/7Wq0Y35/Screenshot-2023-10-06-at-5-50-26-PM.png"
						alt="random"
						className="randImage"
					/>
						<br />

						<br />
						The discussion started as usual with me explaining about drones and aviation industry. As the discussion proceeded, the students became more and more curious about drones and the tech that goes behind them. That's all what I needed from them!, their interest.
						So it went on for hours about the drones and me explaining about the construction of basic to complex drones, and also discussing about biomimicry.

						<br />
						<br />
						All in all, it was a fruitful experience for me and I hope, it was for the students as well 😅.
						<br />

					<br />
					<br />
					<br />

				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
