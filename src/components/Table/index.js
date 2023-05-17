import { Link } from 'react-router-dom'
import { Button } from '../Button'
import './styles.css'

export const Table = ({ courses, onDelete, courseDeletedId }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>

          <td>Curso</td>

          <td>Descrição</td>

          <td>Instrutor</td>

          <td>Excluir</td>

          <td>Editar</td>
        </tr>
      </thead>

      <tbody>
        {courses?.map((course) => {
          return (
            <tr key={course.id}>
              <td>{course.id}</td>

              <td>{course.title}</td>

              <td>{course.description}</td>

              <td>{course.instructor}</td>

              <td>
                <Button
                  onClick={() => onDelete(course)}
                  isLoading={courseDeletedId === course.id}
                >
                  Deletar
                </Button>
              </td>

              <td>
                <Link to={`/courses/edit/${course.id}`}>
                  <Button secondary>Editar</Button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}