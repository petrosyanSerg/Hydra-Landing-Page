import * as yup from "yup"

export const validationSchema = yup.object({
	firstName: yup.string().required("First name is required!!").matches(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, "Incorect Name"),
	lastName: yup.string().required("Last name is required!!").matches(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, "Incorect Name"),
	email: yup.string().required("Email is required!!").email("Is not valid email!!!"),
	phone: yup.string().required("Phone is required!!").matches(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Incorrect phone number"),
	message: yup.string().required("Message is required!!"),
})