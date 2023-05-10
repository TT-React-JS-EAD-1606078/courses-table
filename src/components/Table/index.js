import './styles.css'

export const Table = ({ courses }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Curso</td>

          <td>Descrição</td>

          <td>Instrutor</td>
        </tr>
      </thead>

      <tbody>
        {courses?.map((course) => {
          return (
            <tr key={course.title}>
              <td>{course.title}</td>

              <td>{course.description}</td>

              <td>{course.instructor}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}