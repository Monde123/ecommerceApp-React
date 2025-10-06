import { ADD_COURSE } from "../constants";

const addCourse= (course) => ({
  type: ADD_COURSE,
  course,
});

export default addCourse;
