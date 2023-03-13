import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import classes from "./Arrow.module.scss"

export default function Prev({ onClick }) {
	return (
		<div className={classes.Arrow} onClick={onClick}>
			<span className={classes.Arrow_Block}>
				<RiArrowRightSLine className={classes.Arrow_Icon} />
			</span>
		</div>
	)
}
