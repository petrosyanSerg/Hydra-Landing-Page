import React from 'react'
import Button from '../../Button/Button'

import classes from "./Buttons.module.scss"

export default function Buttons() {
	return (
		<div className={classes.ButtonsCont}>
			<button className={classes.ButtonsCont_Contact}>
				CONTACT US
			</button>
			<Button text="JOIN HYDRA" />
		</div>
	)
}
