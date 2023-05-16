import { Link } from "react-router-dom"
import { Button } from "../Button"
import './styles.css'

export const Header = () => {
  return (
    <div className="header">
      <p className="title">Gerenciamento de cursos</p>

      <div className="headerButtonsContainer">
        <Link to='/'>
          <Button>Listagem de cursos</Button>
        </Link>

        <Link to='/courses/create'>
          <Button secondary>Cadastrar curso</Button>
        </Link>
      </div>
    </div>
  )
}