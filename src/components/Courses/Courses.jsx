import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // console.log(courses);

    return (
        <div className="w-3/4">
            <h1>Hi</h1>
            <div className="grid grid-cols-3 gap-2">
                {
                    courses.map(course => <Course key={course.course_name} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;