import COURSES from "../../data/testData"
import { UPDATE_COURSE, ADD_COURSE } from "../constants";

const initialState={
    existingCourses: COURSES,
    allCourses: COURSES
}

const reducerCourses=( state= initialState, action)=>{

  switch (action.type) {
    case UPDATE_COURSE:
     const   courses=action.courses; 
         const allCourses= state.allCourses.filter(
           item=>!courses.some(c=>c.id===item.id) 
         )
        
        return{...state, allCourses: allCourses, existingCourses: state.existingCourses };
    case 'ADD_COURSE': 
     const newCourse= action.course;
     return{...state, allCourses: state.allCourses.concat(newCourse), existingCourses: state.existingCourses.concat(newCourse)}
    default:
          return state;
  }
  
}

export default reducerCourses