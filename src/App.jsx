import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { courses } from "./data/courses.js";
import CourseList from "./components/CourseList.jsx";

function App() {
  return (
      <div>
        <Header />
        <br></br>
        <CourseList courses={courses} />
        <br></br>
        <Footer />
      </div>
  )
}

export default App
