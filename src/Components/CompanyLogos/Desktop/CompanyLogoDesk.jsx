import React from 'react'
import { CompanyLogos } from '../../../Helper/CompanyLogos'
import classes from "./CompanyLogoDesk.module.scss"
export default function CompanyLogoDesk() {
	return (
		<div className={classes.Logos}>
			{
				CompanyLogos.map(logo => (
					<div key={window.crypto.randomUUID()} className={classes.Logos_Block}>
						<img className={classes.Logos_Img} src={logo} alt="logo" />
					</div>
				))
			}
		</div>
	)
}
