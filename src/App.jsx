import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import SelectedCourses from './components/Selected_Courses/SelectedCourses'

function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalRemaining, setTotalRemaining] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = (course) => {
    // console.log(course_name);
    let count = course.credit;
    let remaining= 20 - course.credit;
    let price = course.price;
    let addNewCourse;
    if (selectedCourse.length === 0) {
      addNewCourse = [...selectedCourse, course];
    }
    else {
      for (let item of selectedCourse) {
        if (item.course_name !== course.course_name) {
          addNewCourse = [...selectedCourse, course];
        }
        else {
          alert('Already selected');
          return;
        }
      }
    }
    selectedCourse.forEach(item => {
      count += item.credit;
      remaining -= item.credit;
      price += item.price;
    })
    if(count<=20){
      setTotalCredit(count);
      setSelectedCourse(addNewCourse);
      setTotalRemaining(remaining);
      setTotalPrice(price);
    }
    else{
      alert('Not enough credit');
    }
  }

  // console.log(totalRemaining);

  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-8'>Course Registration</h1>
      <div className='flex'>
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <SelectedCourses selectedCourse={selectedCourse} totalCredit={totalCredit} totalRemaining={totalRemaining} totalPrice={totalPrice}></SelectedCourses>
      </div>
    </>
  )
}

export default App
