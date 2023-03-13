import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CompanyLogos } from '../../../Helper/CompanyLogos'
import { responsiveSliderSettings } from '../../../Helper/SliderSettings';
import { useSlider } from '../../../Hooks/useSlider'
import Prev from '../../Button/Arrow/Prev'
import Next from '../../Button/Arrow/Next'

import classes from "./CompanyLogoDesk.module.scss"

export default function CompanyLogoDesk() {
	const { slider, left, right } = useSlider()
	return (
		<div className={classes.Logos}>
			<div className={classes.Logos_Arrows}>
				<div className={classes.Logos_Next}>
					<Next onClick={left} />
				</div>
				<div className={classes.Logos_Prev}>
					<Prev onClick={right} />
				</div>
			</div>

			<div className={classes.Logos_Wrapper}>
				<Slider ref={slider} {...responsiveSliderSettings}>
					{
						CompanyLogos.map(logo => (
							<div key={window.crypto.randomUUID()} className={classes.Logos_Block}>
								<img className={classes.Logos_Img} src={logo} alt="logo" />
							</div>
						))
					}
				</Slider>
			</div>

		</div>
	)
}
