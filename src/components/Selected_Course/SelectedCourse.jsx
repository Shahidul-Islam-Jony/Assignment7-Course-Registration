import PropTypes from 'prop-types'
const SelectedCourse = ({course}) => {
    const {course_name} = course;
    console.log(course);
    return (
        <div>
            <p>{course_name}</p>
        </div>
    );
};

SelectedCourse.propTypes = {
    course: PropTypes.object
}

export default SelectedCourse;