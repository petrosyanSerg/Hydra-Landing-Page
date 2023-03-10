import React from 'react'

import classes from "./Logo.module.scss"

export default function Logo() {
	return (
		<div className={classes.LogoContainer}>
			<div className={classes.LogoContainer_Vector}></div>
			<div className={classes.LogoContainer_Text}></div>
		</div>
	)
}
