import './styles.css'

// Named exports
export const Input = ({ name, label, value, onChange, required, ...props }) => {
  return (
    <div className="containerInput">
      <label htmlFor={name} className="label">{label}</label>

      <input className="inputText" name={name} type="text" value={value} onChange={onChange} {...props} />
    </div>
  )
}

// Named exports
export const test = 'test'

// Default exports
const teste2 = 'teste2'
export default teste2

