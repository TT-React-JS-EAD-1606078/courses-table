import React, { useEffect, useState } from 'react'
import { Title } from '../../components/Title'
import './styles.css'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { createCourse, editCourse, getCourseDetails } from '../../api/courses'
import { useNavigate, useParams, } from 'react-router-dom'
import { Loading } from '../../components/Loading'

export const CreateCoursePage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [instructor, setInstructor] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()
  // Boolean (true/false)
  const [isLoading, setIsLoading] = useState(!!id)
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSaving(true)

    const data = {
      title: title,
      description: description,
      instructor: instructor,
    };

    if (id) {
      await editCourse(id, data)
    } else {
      await createCourse(data)
    }

    setIsSaving(false)

    // Navegar para pagina de listagem
    navigate('/')
  }

  const handleLoadDetails = async () => {
    const { data } = await getCourseDetails(id)

    setTitle(data.title)
    setDescription(data.description)
    setInstructor(data.instructor)

    setIsLoading(false)
  }

  useEffect(() => {
    if (id) {
      handleLoadDetails()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Title text={id ? 'Editar curso' : 'Criar curso'} />

      <div className='formContainer'>

        {isLoading ?
          <Loading />
          : (
            <form onSubmit={handleSubmit}>
              <div className='inputsContainer'>
                <Input
                  label='Titulo do curso'
                  name='title'
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <Input
                  label='Descrição'
                  name='description'
                  required
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />

                <Input
                  label='Instrutor'
                  name='instructor'
                  required
                  value={instructor}
                  onChange={event => setInstructor(event.target.value)}
                />
              </div>

              <div className="buttonsContainer">
                <Button typ='submit' isLoading={isSaving}>
                  {id ? 'Editar' : 'Criar'}
                </Button>
              </div>
            </form>
          )
        }
      </div>
    </>
  )
}