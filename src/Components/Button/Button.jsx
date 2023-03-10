import React from 'react'
import classes from './Button.module.scss'

export default function Button({ text }) {
	return <button className={classes.Button}>{text}</button>
}
