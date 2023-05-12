import { apiBaseURL } from "."

export const getCourses = async () => {
  const res = await fetch(`${apiBaseURL}/courses`)
  const data = await res.json()

  return data;
}

export const createCourse = async (course) => {
  await fetch(
    `${apiBaseURL}/courses`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // {"title":"Css","description":"Curso de CSS","instructor":"Sabino"}
      body: JSON.stringify(course)
    }
  )
}