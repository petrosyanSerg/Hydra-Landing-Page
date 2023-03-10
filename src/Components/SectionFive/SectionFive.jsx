import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import classes from "./SectionFive.module.scss"

export default function SectionFive() {
	return (
		<section className={classes.SectionFive}>
			<p className={classes.SectionFive_Title}>TECHNOLOGIES & HARDWARE</p>
			<p className={classes.SectionFive_SubTitle}>USED BY HYDRA VR.</p>
			<span className={classes.SectionFive_Chevron}>
				<span className={classes.SectionFive_IconWrapper}>
					<SlArrowDown className={classes.SectionFive_Icon} />
				</span>
			</span>
		</section>
	)
}
