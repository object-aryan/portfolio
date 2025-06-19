import React from "react";

function article_1() {
	let today = new Date();
	let formattedDate =
		today.getDate() +
		"/" +
		(today.getMonth() + 1) +
		"/" +
		today.getFullYear();
	return {
		qoute: `Technology is best when it brings people together.—"Matt Mullenweg"`,
		date: formattedDate,
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Aryan",
			"Aryan S",
			"Aryan Singh",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 1px solid white;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="h3">Cloud Computing</div>
								<div className="paragraph">
									Cloud computing has become the backbone of
									modern technology and business operations.
									It offers convenience, speed, and
									flexibility, making it possible for
									individuals and organizations to focus on
									innovation rather than managing IT
									infrastructure. As technology continues to
									evolve, cloud computing will play an even
									more significant role in areas like
									Artificial Intelligence, Big Data, and
									Internet of Things (IoT).
								</div>
							</div>
							<div className="col-md-4">
								<img
									src="../Computer.jpg"
									width={400}
									alt="random"
									className="randImage"
								/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	let today = new Date();
	let formattedDate =
		today.getDate() +
		"/" +
		(today.getMonth() + 1) +
		"/" +
		today.getFullYear();
	return {
		date: formattedDate,
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence",
			"Aryan",
			"Aryan S",
			"Aryan Singh",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<div className="h3">
									Artficial Intelligence in HealthCare
								</div>
								<div className="paragraph">
									AI in healthcare is improving the quality,
									speed, and accuracy of medical services. It
									helps doctors make better decisions, ensures
									early disease detection, enhances patient
									safety, and streamlines hospital operations.
									Though challenges remain, with responsible
									use and ethical guidelines, AI has the
									potential to revolutionize global
									healthcare.
								</div>
							</div>
							<div className="col-md-4">
								<img
									src="../AIWithHuman.PNG"
									width={400}
									alt="random"
									className="randImage"
								/>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
