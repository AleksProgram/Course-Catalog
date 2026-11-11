import AvailabilityBadge from "./AvailabilityBadge.jsx";

function CourseCard({courses}) {
    return (
        <div>
            <h2>Name: {courses.title}</h2>
            <p>Mentor: {courses.teacher}</p>
            <p>Duration: {courses.duration}h.</p>
            <p>Price: {courses.price}$</p>
            <AvailabilityBadge isAvailable = {courses.isAvailable} />
        </div>
    )
}

export default CourseCard;