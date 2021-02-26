import React from "react"

type IconProps = {
  name: keyof typeof icons
  className?: string
}

function Icon({ name, className }: IconProps) {
  const icon = icons[name]

  return (
    <div className={className}>
      {React.cloneElement(icon, { width: "100%", height: "100%" })}
    </div>
  )
}

const icons = {
  moon: (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5129 24C14.9058 24 18.0046 22.316 20.0576 19.5566C20.3613 19.1484 20.0301 18.5521 19.5608 18.6496C14.2239 19.7584 9.32295 15.2945 9.32295 9.41738C9.32295 6.03197 10.9842 2.91886 13.6842 1.24266C14.1004 0.984281 13.9957 0.295922 13.5228 0.200625C12.8598 0.0672624 12.1871 0.000109516 11.5129 0C5.44107 0 0.512939 5.3677 0.512939 12C0.512939 18.6239 5.43333 24 11.5129 24Z"
        className="fill-current text-heading dark:text-headingDark transition-colors duration-500"
      />
    </svg>
  ),
  info: (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3438 0.75C5.45888 0.75 0.6875 5.95702 0.6875 12.375C0.6875 18.7967 5.45888 24 11.3438 24C17.2286 24 22 18.7967 22 12.375C22 5.95702 17.2286 0.75 11.3438 0.75ZM11.3438 5.90625C12.3405 5.90625 13.1484 6.78769 13.1484 7.875C13.1484 8.96231 12.3405 9.84375 11.3438 9.84375C10.347 9.84375 9.53906 8.96231 9.53906 7.875C9.53906 6.78769 10.347 5.90625 11.3438 5.90625ZM13.75 17.8125C13.75 18.1231 13.5191 18.375 13.2344 18.375H9.45312C9.16837 18.375 8.9375 18.1231 8.9375 17.8125V16.6875C8.9375 16.3769 9.16837 16.125 9.45312 16.125H9.96875V13.125H9.45312C9.16837 13.125 8.9375 12.8731 8.9375 12.5625V11.4375C8.9375 11.1269 9.16837 10.875 9.45312 10.875H12.2031C12.4879 10.875 12.7188 11.1269 12.7188 11.4375V16.125H13.2344C13.5191 16.125 13.75 16.3769 13.75 16.6875V17.8125Z"
        className="fill-current text-heading dark:text-headingDark transition-colors duration-500"
      />
    </svg>
  ),
}

export default Icon
