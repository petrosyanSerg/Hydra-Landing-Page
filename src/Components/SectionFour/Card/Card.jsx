import React from 'react'
import classes from "./Card.module.scss"
import Button from '../../Button/Button'

export default function Card({ title, text, image }) {
	return (
		<div className={classes.Card}>
			<div className={classes.Card_Images}>
				<img className={classes.Card_Img} src={image} alt={title} />
			</div>
			<h4 className={classes.Card_Title}>{title}</h4>
			<p className={classes.Card_Text}>{text}</p>
			<Button text="TRY IT NOW" />
		</div>
	)
}
