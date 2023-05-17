import React, { useEffect, useState } from "react"
import { Table } from "../../components/Table"
import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import './styles.css'
import { Button } from "../../components/Button"
import { deleteCourse, getCourses } from "../../api/courses"
import { Loading } from "../../components/Loading"

export const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([])
  const [courses, setCourses] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [courseDeletedId, setCourseDeletedId] = useState(false)

  const handleLoadCourses = async () => {
    const response = await getCourses()

    setCourses(response.data)
    setAllCourses(response.data)

    setIsLoading(false)
  }

  const handleFilterCourses = () => {
    setIsLoading(true)

    const newCourses = allCourses.filter((course) => {
      console.log(search)
      return course.title.includes(search)
    })

    setCourses(newCourses)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleChangeSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleResetFilter = () => {
    setSearch('')
    setCourses(allCourses)
  }

  const handleDeleteCourse = async (course) => {
    console.log('Deletar curso')
    console.log(course)

    setCourseDeletedId(course.id)

    await deleteCourse(course.id)
    await handleLoadCourses()

    setCourseDeletedId(false)
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

      {
        isLoading
          ? <Loading />
          : <Table
            courses={courses}
            onDelete={handleDeleteCourse}
            courseDeletedId={courseDeletedId}
          />
      }
    </>
  )
}