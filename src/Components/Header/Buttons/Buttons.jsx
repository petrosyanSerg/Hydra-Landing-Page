import React from 'react'

import classes from "./Buttons.module.scss"

export default function Buttons() {
	return (
		<div className={classes.ButtonsCont}>
			<button className={classes.ButtonsCont_Contact}>
				CONTACT US
			</button>
			<button className={classes.ButtonsCont_Join}>
				JOIN HYDRA
			</button>
		</div>
	)
}
