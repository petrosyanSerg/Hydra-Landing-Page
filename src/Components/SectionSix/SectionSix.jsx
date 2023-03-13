import React from 'react'
import Slider from 'react-slick'

import Indication from '../Indication/Indication'
import Circle from './Circle/Circle'
import { info } from '../../Helper/info'
import { number } from '../../Helper/NumberInfo'
import { useSlider } from '../../Hooks/useSlider'
import { responsiveSliderSettings } from '../../Helper/SliderSettings'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./SectionSix.module.scss"
import Prev from '../Button/Arrow/Prev'
import Next from '../Button/Arrow/Next'

export default function SectionSix() {
	const { slider, left, right } = useSlider()

	return (
		<section className={classes.SectionSix} id="how">
			<Indication {...info[2]} />
			<div className={classes.SectionSix_Arrows}>
				<div className={classes.SectionSix_Next}>
					<Next onClick={left} />
				</div>
				<div className={classes.SectionSix_Prev}>
					<Prev onClick={right} />
				</div>
			</div>
			<div className={classes.SectionSix_Slider}>
				<Slider ref={slider} {...responsiveSliderSettings}>
					{
						number.map(circle => (
							<Circle key={circle.number} {...circle} />
						))
					}
				</Slider>
			</div>
		</section >
	)
}
