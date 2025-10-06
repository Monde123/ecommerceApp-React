import { UPDATE_COURSE } from "../constants";

const updateCourses= (courses) => ({
  type: UPDATE_COURSE,
  courses,
});

export default updateCourses;