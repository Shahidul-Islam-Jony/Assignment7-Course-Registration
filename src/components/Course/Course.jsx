
const Course = ({ course }) => {
    console.log(course);
    const { image, course_name, credit, price, details } = course
    return (
        <div className="w-80 bg-gray-300 p-2 rounded-lg">
            <div>
                <img className="w-full" src={image} alt="" />
                <h1 className="text-lg font-semibold">{course_name}</h1>
            </div>
        </div>
    );
};

export default Course;