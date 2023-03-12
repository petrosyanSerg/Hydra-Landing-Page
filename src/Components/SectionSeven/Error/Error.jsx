import React from 'react'
import { BiError } from "react-icons/bi";

import classes from "./Error.module.scss";
export default function Error({ msg }) {
	return (
		<span className={classes.Error} title={msg}>
			<BiError />
		</span>
	)
}
