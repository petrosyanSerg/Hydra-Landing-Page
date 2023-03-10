import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import Button from '../Button/Button';

import classes from "./SectionOne.module.scss"
export default function SectionOne() {
	return (
		<section className={classes.SectionOne}>
			<div className={classes.SectionOne_Content}>
				<h1 className={classes.SectionOne_Title}>
					<span className={classes.SectionOne_Span}>Dive</span> Into The Depths <br />
					Of <span className={classes.SectionOne_Span}>Virtual Reality</span>
				</h1>
				<p className={classes.SectionOne_Text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore
					nisl tincidunt eget. Lectus mauris eros in vitae .
				</p>
				<div className={classes.SectionOne_Buttons}>
					<Button text="BUILD YOUR WORLD" />
					<HiArrowRight className={classes.SectionOne_Icon} />
				</div>
			</div>
			<div className={classes.SectionOne_Image}>
				<div className={classes.SectionOne_Wrapper}>
					<div className={classes.SectionOne_WrapperImg}></div>
				</div>
			</div>
		</section>
	)
}
