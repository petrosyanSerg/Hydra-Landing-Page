import React from 'react'
import { CardData } from '../../../Helper/CardData'
import Card from '../Card/Card'

import classes from "./SectionFourDesk.module.scss"

export default function SectionFourDesk() {
	return (
		<section className={classes.SectionFour}>
			{
				CardData.map((card => (
					<Card key={window.crypto.randomUUID()} {...card} />
				)))
			}
		</section>
	)
}
