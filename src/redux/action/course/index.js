import Api from "../../../api/Api";

const getCourses = () => (dispatch) => {
  Api.get("/courses")
    .then((res) => {
      dispatch({
        type: "GET_COURSES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getCourse = (id) => (dispatch) => {
  Api.get(`/courses/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_COURSE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const storeCourse = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/courses", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateCourse = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/courses/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyCourse = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/courses/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { getCourses, getCourse, storeCourse, updateCourse, destroyCourse };
