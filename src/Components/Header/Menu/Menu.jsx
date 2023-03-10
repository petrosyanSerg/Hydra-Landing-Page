import React from 'react'

import classes from "./Menu.module.scss"

export default function Menu() {
	return (
		<nav className={classes.Navbar}>
			<ul className={classes.Navbar_Menu}>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink}>
						ABOUT
					</a>
				</li>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink}>
						SERVICES
					</a>
				</li>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink}>
						TECHNOLOGIES
					</a>
				</li>
				<li className={classes.Navbar_MenuItem}>
					<a className={classes.Navbar_MenuLink}>
						HOW TO
					</a>
				</li>
			</ul>
		</nav>
	)
}
