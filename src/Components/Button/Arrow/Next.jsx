import React from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import classes from "./Arrow.module.scss"

export default function Next({ onClick }) {
	return (
		<div className={classes.Arrow} onClick={onClick}>
			<span className={classes.Arrow_Block}>
				<RiArrowLeftSLine className={classes.Arrow_Icon} />
			</span>
		</div>
	)
}
