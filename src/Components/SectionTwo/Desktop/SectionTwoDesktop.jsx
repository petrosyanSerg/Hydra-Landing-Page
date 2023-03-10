import React from 'react'
import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import classes from "./SectionTwoDesktop.module.scss"

export default function SectionTwoDesktop() {
	return (
		<section className={classes.SectionTwo}>
			<div className={classes.SectionTwo_Block}>
				<VscLocation className={classes.SectionTwo_Icon} />
				<div className={classes.SectionTwo_Text}>
					<span className={classes.SectionTwo_Title}> Pay Us a Visit </span>
					<span className={classes.SectionTwo_Subtitles}> Union St, Seattle, WA 98101, United States </span>
				</div>
			</div>
			<div className={classes.SectionTwo_Block}>
				<FiPhoneCall className={classes.SectionTwo_Icon} />
				<div className={classes.SectionTwo_Text}>
					<span className={classes.SectionTwo_Title}> Give Us a Call </span>
					<span className={classes.SectionTwo_Subtitles}> (110) 1111-1010 </span>
				</div>
			</div>
			<div className={classes.SectionTwo_Block}>
				<BiEnvelope className={classes.SectionTwo_Icon} />
				<div className={classes.SectionTwo_Text}>
					<span className={classes.SectionTwo_Title}> Send Us a Message </span>
					<span className={classes.SectionTwo_Subtitles}> Contact@HydraVTech.com </span>
				</div>
			</div>
		</section>
	)
}
