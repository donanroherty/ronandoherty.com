type AlertProps = {
  title: string
  message: string
  show?: boolean
}

function Alert(props: AlertProps) {
  const { title, message, show } = props

  return (
    <div
      className={`
        pointer-events-none
        fixed h-full w-full top-0 left-0 bg-gray-900 bg-opacity-40 
        ${!show && "opacity-0"} transition-opacity duration-1000
      `}
    >
      {/* backdrop */}

      <div className={`fixed flex w-full h-full `}>
        {/* message box */}
        <div
          className={`
          bg-gray-100 border border-gray-300 
          rounded-tl-sm rounded-bl-sm rounded-br-3xl rounded-tr-3xl
          shadow-xl p-10
          w-3/5
          z-10
          m-auto
          `}
        >
          <div className="inline-block">
            <div className={`font-heading text-heading text-xl font-bold`}>{title}</div>
            <div className={`font-body text-xl text-body`}>{message}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Alert
