import React from 'react'

import Buttons from './Buttons/Buttons'
import Logo from './Logo/Logo'
import MenuBar from './Menu/Menu'

import classes from "./Header.module.scss"

export default function Header() {
	return (
		<header className={classes.Header}>
			<Logo />
			<MenuBar />
			<Buttons />
		</header>
	)
}