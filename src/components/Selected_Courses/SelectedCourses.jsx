import PropTypes from 'prop-types'
import SelectedCourse from '../Selected_Course/SelectedCourse';
const SelectedCourses = ({ selectedCourse }) => {
    // console.log(selectedCourse);
    // for(let item of selectedCourse){
    //     console.log(item);
    // }
    return (
        <div className="w-1/4">
            <h2 className='text-lg font-bold text-blue-600 border-gray-400 border-b-2 p-2'>Credit Hour Remaining</h2>
            <h1>Course Name</h1>
            {
                selectedCourse.map(course => <SelectedCourse key={course.course_name} course={course}></SelectedCourse>)
            }
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourse: PropTypes.array
}

export default SelectedCourses;