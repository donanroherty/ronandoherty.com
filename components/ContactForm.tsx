import { Formik } from "formik"
import { ContactFormType } from "../types/forms"
import * as Yup from "yup"

function ContactForm() {
  async function handleFormSubmit(values: ContactFormType) {
    const body = {
      ...values,
    }
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    })
    const json = await res.json()

    console.log(json)
  }

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().min(10, "10 chars min").required("Required"),
  })

  return (
    <div className="pb-10">
      <div className="text-xl text-heading font-extrabold">Contact</div>
      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={handleFormSubmit}
        validationSchema={contactSchema}
      >
        {({
          handleSubmit,
          values,
          isSubmitting,
          handleChange,
          handleBlur,
          errors,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="grid space-y-2 text-body justify-items-stretch mt-3"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-32 flex sm:flex-col flex-row align-top">
                <label className="font-semibold">Email</label>
                <div className="my-auto pl-3 sm:my-0 sm:pl-0">
                  {errors.email && (
                    <div className="text-xs text-error sm:absolute">
                      {errors.email}
                    </div>
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
                  placeholder="you@exexample.com"
                  className="bg-gray-200 border-gray-300 border from-gray-100 pl-3 pr-3 w-full h-9 rounded-tl-sm rounded-tr-3xl rounded-br-sm rounded-bl-sm focus:outline-none focus:border-gray-400"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-32 flex sm:flex-col flex-row align-top">
                <label className="font-semibold">Message</label>
                <div className="my-auto pl-3 sm:my-0 sm:pl-0">
                  {errors.message && (
                    <div className="text-xs text-error">{errors.message}</div>
                  )}
                </div>
              </div>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter a message..."
                className="bg-gray-200 border-gray-300 border from-gray-100 pl-3 pr-3 pt-2 pb-2 w-full rounded-tl-sm rounded-tr-sm rounded-br-sm rounded-bl-sm h-32 focus:outline-none focus:border-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-heading hover:bg-subtitle rounded-tl-sm rounded-tr-sm rounded-br-3xl rounded-bl-sm h-9 w-full sm:w-44 text-white justify-self-end"
            >
              <div className="pl-5 float-left">Send</div>
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
