import React, { useState } from 'react'
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import classes from "./Menu.module.scss"

export default function MenuBar() {
	const [active, setActive] = useState(false);
	return (
		<nav className={classes.Navbar}>
			<div className={classes.Navbar_Icon} onClick={() => setActive(!active)}>
				{active ? <CgClose /> : <CgMenuRightAlt />}
			</div>
			<ul className={`${classes.Navbar_Menu} ${active ? classes.actvie_menu : ""}`} onClick={() => setActive(!active)}>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink} href="#about">
						ABOUT
					</a>
				</li>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink} href="#services">
						SERVICES
					</a>
				</li>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink} href="#technologies">
						TECHNOLOGIES
					</a>
				</li>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink} href="#how">
						HOW TO
					</a>
				</li>
			</ul>
		</nav>
	)
}