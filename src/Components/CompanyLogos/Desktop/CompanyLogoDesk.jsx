import React from 'react'
import { CompanyLogos } from '../../../Helper/CompanyLogos'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { responsiveSliderSettings } from '../../../Helper/SliderSettings';

import classes from "./CompanyLogoDesk.module.scss"

export default function CompanyLogoDesk() {
	return (
		<div className={classes.Logos}>
			<div className={classes.Logos_Wrapper}>
				<Slider {...responsiveSliderSettings}>
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
