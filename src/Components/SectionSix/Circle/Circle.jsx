import React from 'react'
import { FaArrowRight } from "react-icons/fa";

import classes from "./Circle.module.scss"

export default function Circle({ number, title }) {
	return (
		<div className={classes.Circle}>
			<div className={classes.Circle_Wrapper}>
				<div className={classes.Circle_Number}>0{number}</div>
			</div>
			<div className={classes.Circle_Block}>
				<FaArrowRight className={classes.Circle_Icon} />
				<p className={classes.Circle_Text}>{title}</p>
			</div>
		</div>
	)
}
