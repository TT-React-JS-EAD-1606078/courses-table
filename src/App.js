import { Header } from "./components/Header";
import { CoursesPage } from "./pages/Courses";
import { CreateCoursePage } from "./pages/CreateCourse";

function App() {
  return (
    <>
      <Header />

      <main className="pageContainer">
        <CreateCoursePage />
      </main>
    </>
  );
}

export default App;
