import CourseCard from "./CourseCard.jsx";

function CourseList( {courses} ) {

    if (!courses || courses.length === 0) {
        return <div>
            <p>The list of course not found!</p>
        </div>;
    }

   return (
       <div>
           {courses.map((course) => (
                <CourseCard
                courses={course}
                key = {course.id}
           />
       ))}
       </div>
   )
}
export default CourseList;