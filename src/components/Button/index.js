import './styles.css'

export const Button = ({ children, secondary, isLoading, ...props }) => {
  return (
    <button {...props} className={secondary ? 'buttonSecondary' : 'button'}>
      {isLoading ? 'Carregando...' : children}
    </button>
  )
}