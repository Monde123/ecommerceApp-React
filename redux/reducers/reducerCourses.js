import COURSES from "../../data/testData"
import { UPDATE_COURSE } from "../constants";

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
  
    default:
          return state;
  }
  
}

export default reducerCourses