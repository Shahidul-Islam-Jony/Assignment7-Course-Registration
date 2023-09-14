import './App.css'
import Courses from './components/Courses/Courses'
import SelectedCourses from './components/Selected_Courses/SelectedCourses'

function App() {


  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-8'>Course Registration</h1>
      <div className='flex'>
        <Courses></Courses>
        <SelectedCourses></SelectedCourses>
      </div>
    </>
  )
}

export default App
