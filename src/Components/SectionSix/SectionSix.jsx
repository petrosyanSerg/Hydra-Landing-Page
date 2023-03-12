import React from 'react'
import Indication from '../Indication/Indication'
import Circle from './Circle/Circle'
import { info } from '../../Helper/info'
import { number } from '../../Helper/NumberInfo'

import { responsiveSliderSettings } from '../../Helper/SliderSettings'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classes from "./SectionSix.module.scss"

export default function SectionSix() {
	return (
		<section className={classes.SectionSix} id="how">
			<Indication {...info[2]} />
			<div className={classes.SectionSix_Slider}>
				<Slider {...responsiveSliderSettings}>
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
