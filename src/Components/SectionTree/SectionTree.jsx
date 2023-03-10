import React from 'react'
import Indication from '../Indication/Indication';
import { info } from '../../Helper/info';
import classes from "./SectionTree.module.scss"

export default function SectionTree() {
	return (
		<section className={classes.SectionTree}>
			<Indication {...info[0]} />
			<div className={classes.SectionTree_Content}>
				<div className={classes.SectionTree_Wrapper}>
					<div className={classes.SectionTree_Wrapper_Image}></div>
				</div>
				<aside className={classes.SectionTree_Aside}>
					<div className={classes.SectionTree_TitleBlock}>
						<h2 className={classes.SectionTree_Title}>ABOUT</h2>
						<h3 className={classes.SectionTree_SubTitle}>HYDRA VR</h3>
					</div>
					<p className={classes.SectionTree_Text}>
						Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
						urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
						dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
						Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
						sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
						etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
						cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
						retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
						n tempor.
					</p>
					<button className={classes.SectionTree_Button}>LET’S GET IN TOUCH</button>
				</aside>
			</div>
			<Indication {...info[1]} />
		</section>
	)
}
