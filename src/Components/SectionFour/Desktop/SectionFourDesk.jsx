import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../Card/Card'
import { CardData } from '../../../Helper/CardData'
import { responsiveSliderSettings } from '../../../Helper/SliderSettings'
import { useSlider } from '../../../Hooks/useSlider'
import Prev from '../../Button/Arrow/Prev'
import Next from '../../Button/Arrow/Next'

import classes from "./SectionFourDesk.module.scss"


export default function SectionFourDesk() {
	const { slider, left, right } = useSlider();

	return (
		<section className={classes.SectionFour} id="services">
			<div className={classes.SectionFour_Arrows}>
				<div className={classes.SectionFour_Next}>
					<Next onClick={left} />
				</div>
				<div className={classes.SectionFour_Prev}>
					<Prev onClick={right} />
				</div>
			</div>

			<Slider ref={slider} {...responsiveSliderSettings}>
				{
					CardData.map((card => (
						<Card key={window.crypto.randomUUID()} {...card} />
					)))
				}
			</Slider>
		</section>
	)
}
