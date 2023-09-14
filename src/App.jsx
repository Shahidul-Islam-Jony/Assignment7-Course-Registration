import {useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import SelectedCourses from './components/Selected_Courses/SelectedCourses'

function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);

  const handleSelectBtn = (course) => {
    // console.log(course_name);
    let addNewCourse;
    if(selectedCourse.length === 0){
      addNewCourse = [...selectedCourse,course];
    }
    else{
        for(let item of selectedCourse){
          if(item.course_name !== course.course_name){
            addNewCourse = [...selectedCourse,course];
          }
          else{
            alert('Already selected');
            return;
          }
        }
    }
    setSelectedCourse(addNewCourse);
    // console.log(Array.isArray(selectedCourse));
  }


  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-8'>Course Registration</h1>
      <div className='flex'>
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <SelectedCourses selectedCourse={selectedCourse}></SelectedCourses>
      </div>
    </>
  )
}

export default App
