import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import classes from "./Indication.module.scss"
export default function Indication({ title, subTitle, text }) {
	return (
		<div className={classes.Indication}>
			<div className={classes.Indication_Block}>
				<p className={classes.Indication_Title}>{title}</p>
				<div className={classes.Indication_Cont}>
					<span className={classes.Indication_subTitle}>{subTitle}</span>
					<HiOutlineArrowLongRight className={classes.Indication_Icon} />
				</div>
			</div>
			<p className={classes.Indication_Text}>{text}</p>
		</div>
	)
}
