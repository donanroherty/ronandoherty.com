import { Formik } from "formik"
import { ContactFormType } from "../types/forms"
import * as Yup from "yup"
import Alert from "./Alert"
import { useState } from "react"

const SUCCESS_MESSAGE = {
  title: "Success",
  message: "Message sent.  Thanks for reaching out.",
}
const FAIL_MESSAGE = {
  title: "Failure",
  message: "Message could not be sent.",
}

function ContactForm() {
  const [messageSuccess, setMessageSuccess] = useState(false)
  const [alertVisible, setAlertVisible] = useState(false)
  function showAlert() {
    setAlertVisible(true)
    setTimeout(() => setAlertVisible(false), 2000)
  }

  async function handleFormSubmit(values: ContactFormType) {
    const body = {
      ...values,
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    })
    setMessageSuccess(res.status === 200)
    showAlert()
  }

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(10, "10 chars min").required("Required"),
  })

  const alertMessage = messageSuccess ? SUCCESS_MESSAGE : FAIL_MESSAGE

  return (
    <div className="pb-10">
      <div className="text-xl font-extrabold text-heading">Contact</div>

      {alertVisible && <Alert {...alertMessage} show />}

      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={handleFormSubmit}
        validationSchema={contactSchema}
      >
        {({ handleSubmit, values, isSubmitting, handleChange, handleBlur, errors }) => (
          <form
            onSubmit={handleSubmit}
            className="grid mt-3 space-y-2 text-body font-body justify-items-stretch"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-row align-top sm:w-32 sm:flex-col">
                <label className="font-semibold">Email</label>
                <div className="pl-3 my-auto sm:my-0 sm:pl-0">
                  {errors.email && (
                    <div className="text-xs text-error sm:absolute">{errors.email}</div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <input
                  // type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  placeholder="you@example.com"
                  className="w-full pl-3 pr-3 bg-gray-100 border border-gray-300 rounded-tl-sm rounded-bl-sm rounded-br-sm font-body from-gray-100 h-9 rounded-tr-3xl focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-row align-top sm:w-32 sm:flex-col">
                <label className="font-semibold">Message</label>
                <div className="pl-3 my-auto sm:my-0 sm:pl-0">
                  {errors.message && <div className="text-xs text-error">{errors.message}</div>}
                </div>
              </div>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                placeholder="Enter a message..."
                className="w-full h-32 pt-2 pb-2 pl-3 pr-3 bg-gray-100 border border-gray-300 rounded-tl-sm rounded-tr-sm rounded-bl-sm rounded-br-sm font-body from-gray-100 focus:outline-none focus:border-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full text-white rounded-tl-sm rounded-tr-sm rounded-bl-sm 
                ${isSubmitting ? "bg-gray-100" : "bg-heading"} 
                ${isSubmitting ? "border border-gray-300" : "border-none"}
                ${isSubmitting ? "hover:bg-gray-100" : "hover:bg-subtitle"}
                rounded-br-3xl h-9 sm:w-44 justify-self-end
              `}
            >
              <div
                className={`
                  float-left pl-5
                  ${isSubmitting ? "text-heading" : "text-gray-100"}
                `}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </div>
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
