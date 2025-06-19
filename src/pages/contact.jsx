import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media!
						</div>
						<div className="container-fluid">
							<div className="contact_us_2">
								<div className="responsive-container-block big-container">
									<div className="blueBG"></div>
									<div className="responsive-container-block container">
										<form className="form-box">
											<div className="container-block form-wrapper">
												<p className="text-blk contactus-head">
													Get in Touch
												</p>
												<p className="text-blk contactus-subhead">
													Fill the from and submit!.
												</p>
												<div className="responsive-container-block">
													<div
														className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
														id="i10mt"
													>
														<p className="text-blk input-title">
															FIRST NAME
														</p>
														<input
															className="input"
															id="ijowk"
															name="FirstName"
															placeholder="Please enter first name..."
														/>
													</div>
													<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
														<p className="text-blk input-title">
															LAST NAME
														</p>
														<input
															className="input"
															id="indfi"
															name="Last Name"
															placeholder="Please enter last name..."
														/>
													</div>
													<br />
													<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
														<p className="text-blk input-title">
															EMAIL
														</p>
														<input
															className="input"
															id="ipmgh"
															name="Email"
															placeholder="Please enter email..."
														/>
													</div>
													<div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
														<p className="text-blk input-title">
															PHONE NUMBER
														</p>
														<input
															className="input"
															id="imgis"
															name="PhoneNumber"
															placeholder="Please enter phone number..."
														/>
													</div>
													<div
														className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
														id="i634i"
													>
														<p className="text-blk input-title">
															WHAT DO YOU HAVE IN
															MIND
														</p>
														<textarea
															className="textinput"
															id="i5vyy"
															cols={47}
															placeholder="Please enter query..."
															defaultValue={""}
														/>
													</div>
												</div>
												<button className="submit-btn">
													Submit
												</button>
											</div>
											<div className="social-media-links">
												<a href="." id="ix94i-2">
													<img
														className="link-img"
														src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
														alt="logo"
													/>
												</a>
												<a href=".">
													<img
														className="link-img"
														src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
														alt="logo"
													/>
												</a>
												<a href=".">
													<img
														className="link-img"
														src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
														alt="logo"
													/>
												</a>
												<a href="." id="izldf-2">
													<img
														className="link-img"
														src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
														alt="logo"
													/>
												</a>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
