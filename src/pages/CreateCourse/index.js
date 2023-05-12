import React, { useState } from 'react'
import { Title } from '../../components/Title'
import './styles.css'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { createCourse } from '../../api/courses'

export const CreateCoursePage = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [instructor, setInstructor] = useState('')



  const handleSubmit = async (event) => {
    event.preventDefault()

    const newCourse = {
      title: title,
      description: description,
      instructor: instructor,
    };

    await createCourse(newCourse)
  }

  return (
    <>
      <Title text='Criar curso' />

      <div className='formContainer'>
        <form onSubmit={handleSubmit} >
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
            <Button typ='submit'>Salvar</Button>
          </div>
        </form>

      </div>
    </>
  )
}