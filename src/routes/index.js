import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { CoursesPage } from "../pages/Courses"
import { CreateCoursePage } from "../pages/CreateCourse"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <main className="pageContainer">
        <Routes>
          <Route path="/" element={<CoursesPage />} />

          <Route path="/courses/create" element={<CreateCoursePage />} />

          <Route path="/courses/edit/:id" element={<CreateCoursePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}