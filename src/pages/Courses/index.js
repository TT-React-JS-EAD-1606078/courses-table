import React, { useEffect, useState } from "react"
import { Table } from "../../components/Table"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import './styles.css'
import { Button } from "../../components/Button"
import { getCourses } from "../../api/courses"

export const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([])
  const [courses, setCourses] = useState([])
  const [search, setSearch] = useState('')

  const handleLoadCourses = async () => {
    const data = await getCourses()

    setCourses(data)
    setAllCourses(data)
  }

  const handleFilterCourses = () => {
    const newCourses = allCourses.filter((course) => {
      return course.title.includes(search)
    })

    setCourses(newCourses)
  }

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleResetFilter = () => {
    setSearch('')
  }

  useEffect(() => {
    handleLoadCourses()
  }, [])

  return (
    <>
      <Title text='Tabela de cursos' />

      <div className="searchContainer">
        <Input
          name='search'
          label='Busca'
          value={search}
          onChange={handleChangeSearch}
        />

        <div className="buttonsContainer">
          <Button
            onClick={handleFilterCourses}
          >
            Filtrar
          </Button>

          <Button onClick={handleResetFilter} secondary>
            Reset
          </Button>
        </div>
      </div>
      <Table courses={courses} />
    </>
  )
}