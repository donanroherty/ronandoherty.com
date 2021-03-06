import { Formik } from "formik"

function ContactForm() {
  function handleFormSubmit() {
    console.log("submitted")
  }

  function StyledInput(props: any) {
    return <input className="" />
  }

  return (
    <div className="pb-10">
      <div className="text-xl text-heading font-extrabold">Contact</div>
      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, values, isSubmitting, handleChange, handleBlur }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-2 text-body"
          >
            <div className="flex flex-col">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@exexample.com"
                className="bg-gray-200 border-gray-300 border from-gray-100 pl-3 pr-3 w-full h-9 rounded-tl-sm rounded-tr-3xl rounded-br-sm rounded-bl-sm focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Message</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-gray-200 border-gray-300 border from-gray-100 pl-3 pr-3 pt-2 pb-2 w-full rounded-tl-sm rounded-tr-sm rounded-br-sm rounded-bl-sm h-32 focus:outline-none focus:border-gray-400"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-heading rounded-tl-sm rounded-tr-sm rounded-br-3xl rounded-bl-sm h-9 text-white"
            >
              Send
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ContactForm
