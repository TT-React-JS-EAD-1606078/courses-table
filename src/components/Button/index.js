import './styles.css'

export const Button = ({ children, secondary, ...props }) => {
  return (
    <button {...props} className={secondary ? 'buttonSecondary' : 'button'}>
      {children}
    </button>
  )
}