import PropTypes from 'prop-types'
import { BsBook } from 'react-icons/bs'
import { BiDollar } from 'react-icons/bi'

const Course = ({ course, handleSelectBtn}) => {
    // console.log(course);
    const { image, course_name, credit, price, details } = course
    return (
        <div className="w-80 bg-white p-4 rounded-xl">
            <div>
                <img className="w-full" src={image} alt="" />
                <h1 className="text-lg font-semibold my-4">{course_name}</h1>
                <p>{details}</p>
                <div className="flex justify-between mt-5">
                    <div className='flex items-center'>
                        <BiDollar className='text-2xl'></BiDollar>
                        <p>Price : {price}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <BsBook></BsBook>
                        <p>Credit : {credit}hr</p>
                    </div>
                </div>
                <button onClick={() => handleSelectBtn(course)} className="bg-blue-600 w-full p-2 rounded-lg text-white font-semibold mt-6">Select</button>
            </div>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectBtn: PropTypes.func
}

export default Course;