import './styles.css'

// Named exports
export const Input = ({ name, label, value, onChange, ...props }) => {
  return (
    <div className="containerInput">
      <label htmlFor={name} className="label">{label}</label>

      <input className="inputText" name={name} type="text" value={value} onChange={onChange} {...props} />
    </div>
  )
}

// Named exports
export const test = 'test'

