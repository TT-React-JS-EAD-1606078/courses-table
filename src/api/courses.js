import { api } from './'

export const getCoursesTmp = async () => {
  // [GET] - https://6348cc5ea59874146b110e79.mockapi.io/courses
  // const res = await fetch(`${apiBaseURL}/courses`)
  // const data = await res.json()
  // return data

  // {baseURL} + endpoint
  const data = await api.get('/courses')

  return data;
}

// {baseURL} + endpoint
// Retorna uma Promise
export const getCourses = () => api.get('/courses')

export const createCourse = async (course) => {
  await api.post('/courses', course)

  // await fetch(
  //   // [POST] - https://6348cc5ea59874146b110e79.mockapi.io/courses
  //   `/courses`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     // {"title":"Css","description":"Curso de CSS","instructor":"Sabino"}
  //     body: JSON.stringify(course)
  //   }
  // )
}

export const deleteCourse = async (id) => {
  // [DELETE] - https://6348cc5ea59874146b110e79.mockapi.io/courses/:id
  await api.delete(`/courses/${id}`)
}

export const getCourseDetails = id => api.get(`/courses/${id}`)

export const editCourse = (id, data) => api.put(`/courses/${id}`, data)

// [GET] - https://6348cc5ea59874146b110e79.mockapi.io/courses
// [PUT] - https://6348cc5ea59874146b110e79.mockapi.io/courses
// [DELETE] - https://6348cc5ea59874146b110e79.mockapi.io/courses
// [PATCH] - https://6348cc5ea59874146b110e79.mockapi.io/courses
