import { Button } from "../Button"
import './styles.css'

export const Header = () => {
  return (
    <div className="header">
      <p className="title">Gerenciamento de cursos</p>

      <div className="headerButtonsContainer">
        <Button>Listagem de cursos</Button>

        <Button secondary>Cadastrar curso</Button>
      </div>
    </div>
  )
}