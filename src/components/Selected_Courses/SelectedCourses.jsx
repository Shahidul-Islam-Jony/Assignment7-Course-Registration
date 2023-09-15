import PropTypes from 'prop-types'
import SelectedCourse from '../Selected_Course/SelectedCourse';
const SelectedCourses = ({ selectedCourse, totalCredit, totalRemaining,totalPrice}) => {

    // console.log(selectedCourse);
    // for(let item of selectedCourse){
    //     console.log(item);
    // }
    return (
        <div className="w-1/4">
            <div className='w-80 bg-white p-4 rounded-xl'>
                <h2 className='text-lg font-bold text-blue-600 border-gray-400 border-b-2 py-4'>Credit Hour Remaining {totalRemaining}</h2>
                <h1 className='text-xl font-bold py-4'>Course Name</h1>
                <div className='border-gray-400 border-b-2 py-4'>
                    {
                        selectedCourse.map((course, idx) => <SelectedCourse key={course.course_name} course={course} idx={idx}></SelectedCourse>)
                    }
                </div>
                <h4 className='border-gray-400 border-b-2 py-4 text-base font-medium'>Total Credit Hour : {totalCredit}</h4>
                <h4 className='text-base font-semibold mt-4'>Total Price : {totalPrice}</h4>
            </div>
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourse: PropTypes.array,
    totalCredit:PropTypes.number,
    totalRemaining:PropTypes.number,
    totalPrice:PropTypes.number
}

export default SelectedCourses;