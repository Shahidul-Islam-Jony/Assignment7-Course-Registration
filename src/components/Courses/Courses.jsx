import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({ handleSelectBtn }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    // console.log(courses);

    return (
        <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    courses.map(course => <Course key={course.course_name} course={course} handleSelectBtn={handleSelectBtn}></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleSelectBtn: PropTypes.func
}

export default Courses;