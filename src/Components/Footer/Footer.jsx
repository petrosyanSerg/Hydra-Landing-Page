import React from 'react'
import Button from '../Button/Button'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram, BsPinterest } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../Assets/Logo/Logo.png"

import classes from "./Footer.module.scss";

export default function Footer() {
	return (
		<>
			<footer className={classes.Footer}>
				<div className={classes.Footer_Image}>
					<img src={logo} alt="Logo" className={classes.Footer_Img} />
				</div>
				<div className={classes.Footer_Navbar}>
					<ul className={classes.Footer_Menu}>
						<li className={classes.Footer_MenuItem}>
							<a href="#about" className={classes.Footer_MenuLink}> ABOUT </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a href="#services" className={classes.Footer_MenuLink}> SERVICES </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a href="#technologies" className={classes.Footer_MenuLink}> TECHNOLOGIES </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a href="#how" className={classes.Footer_MenuLink}> HOW TO </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a className={classes.Footer_MenuLink}> JOIN HYDRA </a>
						</li>
					</ul>
				</div>
				<div className={classes.Footer_Conditions}>
					<ul className={classes.Footer_Menu}>
						<li className={classes.Footer_MenuItem}>
							<a className={classes.Footer_MenuLink}> F.A.Q </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a className={classes.Footer_MenuLink}> SITEMAP </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a className={classes.Footer_MenuLink}> CONDITIONS </a>
						</li>
						<li className={classes.Footer_MenuItem}>
							<a className={classes.Footer_MenuLink}> LICENSES </a>
						</li>
					</ul>
				</div>
				<div className={classes.Footer_Medias}>
					<p className={classes.Footer_Title}>SOCIALIZE WITH HYDRA</p>
					<p className={classes.Footer_IconCont}>
						<span className={classes.Footer_IconBlock}>
							<a className={classes.Footer_IconLink}>
								<BsFacebook className={classes.Footer_Icon} />
							</a>
						</span>
						<span className={classes.Footer_IconBlock}>
							<a className={classes.Footer_IconLink}>
								<BsTwitter className={classes.Footer_Icon} />
							</a>
						</span>
						<span className={classes.Footer_IconBlock}>
							<a className={classes.Footer_IconLink}>
								<FaLinkedinIn className={classes.Footer_Icon} />
							</a>
						</span>
						<span className={classes.Footer_IconBlock}>
							<a className={classes.Footer_IconLink}>
								<BsYoutube className={classes.Footer_Icon} />
							</a>
						</span>
						<span className={classes.Footer_IconBlock}>
							<a className={classes.Footer_IconLink}>
								<BsInstagram className={classes.Footer_Icon} />
							</a>
						</span>
						<span className={classes.Footer_IconBlock}>
							<a className={classes.Footer_IconLink}>
								<BsPinterest className={classes.Footer_Icon} />
							</a>
						</span>
					</p>
					<Button text="BUILD YOUR WORLD" />
				</div>
			</footer>
			<p className={classes.Created}>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
		</>
	)
}
