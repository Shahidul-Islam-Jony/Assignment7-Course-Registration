import PropTypes from 'prop-types'
const SelectedCourse = ({course,idx}) => {
    const {course_name} = course;
    // console.log(course);
    return (
        <div>
            <p>{idx+1} {course_name}</p>
        </div>
    );
};

SelectedCourse.propTypes = {
    course: PropTypes.object,
    idx:PropTypes.number
}

export default SelectedCourse;