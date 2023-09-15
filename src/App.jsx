import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import SelectedCourses from './components/Selected_Courses/SelectedCourses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [selectedAllCourse, setSelectedAllCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectBtn = (course) => {
    // console.log(course_name);
    let count = course.credit;
    let price = course.price;
    let addNewCourse;
    if (selectedAllCourse.length === 0) {
      addNewCourse = [...selectedAllCourse, course];
    }
    else {
      for (let item of selectedAllCourse) {
        if (item.course_name !== course.course_name) {
          addNewCourse = [...selectedAllCourse, course];
        }
        else {
          toast.info('Already selected');
          return;
        }
      }
    }
    selectedAllCourse.forEach(item => {
      count += item.credit;
      price += item.price;
    })
    if (count <= 20) {
      setTotalCredit(count);
      setSelectedAllCourse(addNewCourse);
      setTotalPrice(price);
    }
    else {
      toast.warning('Not enough credit');
    }
  }

  // console.log(totalRemaining);


  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-8'>Course Registration</h1>
      <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row relative'>
        <Courses handleSelectBtn={handleSelectBtn}></Courses>
        <SelectedCourses selectedCourse={selectedAllCourse} totalCredit={totalCredit} totalPrice={totalPrice}></SelectedCourses>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
