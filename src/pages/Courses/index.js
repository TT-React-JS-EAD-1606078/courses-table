import { useEffect, useState } from "react"
import { Table } from "../../components/Table"
import { Title } from "../../components/Title"

export const CoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [search, setSearch] = useState('')

  const handleLoadCourses = async () => {
    const res = await fetch('https://6348cc5ea59874146b110e79.mockapi.io/courses')
    const data = await res.json()

    setCourses(data)
  }

  const handleFilterCourses = () => {
    const newCourses = courses.filter((course) => {
      return course.title.includes(search)
    })

    setCourses(newCourses)
  }

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    handleLoadCourses()
  }, [search])

  return (
    <main className="pageContainer">
      <Title text='Tabela de cursos' />

      <label htmlFor="search">Buscar</label>
      <input name="search" type="text" value={search} onChange={handleChangeSearch} />

      <button onClick={handleFilterCourses}>Filtrar</button>

      <Table courses={courses} />
    </main>
  )
}