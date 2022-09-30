const stateCourses = {
  courses: [],
};

const stateCourse = {
  course: {},
};

const courses = (state = stateCourses, action) => {
  if (action.type === "GET_COURSES") {
    return {
      ...state,
      courses: action.payload,
    };
  }

  return state;
};

const course = (state = stateCourse, action) => {
  if (action.type === "GET_COURSE") {
    return {
      ...state,
      course: action.payload,
    };
  }

  return state;
};

export { courses, course };
