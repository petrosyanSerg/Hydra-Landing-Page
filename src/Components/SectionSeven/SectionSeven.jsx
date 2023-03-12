import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues } from '../../Helper/InitialValues'
import { validationSchema } from '../../Helper/ValidationSchema'

import Button from '../Button/Button'
import Error from './Error/Error'
import classes from "./SectionSeven.module.scss"

export default function SectionSeven() {
	return (
		<section className={classes.SectionSeven}>
			<h3 className={classes.SectionSeven_Title}>JOIN HYDRA</h3>
			<p className={classes.SectionSeven_SubTitle}>Let’s Build Your VR Experience</p>
			<div className={classes.SectionSeven_FormContainer}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					validateOnChange={false}
					validateOnBlur={true}
				>
					<Form className={classes.SectionSeven_Form}>
						<div className={classes.SectionSeven_InputsBlock}>
							<Field type="text" name="firstName" className={classes.SectionSeven_Input} placeholder="First Name" />
							<ErrorMessage name="firstName" render={msg => <Error msg={msg} />} />
							<Field type="text" name="lastName" className={classes.SectionSeven_Input} placeholder="Last Name" />
							<ErrorMessage name="lastName" render={msg => <Error msg={msg} />} />
						</div>
						<div className={classes.SectionSeven_InputsBlock}>
							<Field type="email" name="email" className={classes.SectionSeven_Input} placeholder="Email" />
							<ErrorMessage name="email" render={msg => <Error msg={msg} />} />
							<Field type="text" name="phone" className={classes.SectionSeven_Input} placeholder="Phone Number" />
							<ErrorMessage name="phone" render={msg => <Error msg={msg} />} />
						</div>
						<Field type="text" name="subject" className={classes.SectionSeven_Subject} placeholder="Subject" />
						<Field as="textarea" name="message" className={classes.SectionSeven_Area} placeholder="Tell Us Something..." />
						<Button text="SEND TO HYDRA" />
					</Form>
				</Formik>
			</div>
		</section>
	)
}
