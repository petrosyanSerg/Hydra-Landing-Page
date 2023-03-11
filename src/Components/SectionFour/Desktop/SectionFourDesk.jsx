import React from 'react'
import Slider from 'react-slick'
import { responsiveSliderSettings } from '../../../Helper/SliderSettings'
import { CardData } from '../../../Helper/CardData'
import Card from '../Card/Card'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./SectionFourDesk.module.scss"

export default function SectionFourDesk() {
	return (
		<section className={classes.SectionFour}>
			<Slider {...responsiveSliderSettings}>
				{
					CardData.map((card => (
						<Card key={window.crypto.randomUUID()} {...card} />
					)))
				}
			</Slider>
		</section>
	)
}
