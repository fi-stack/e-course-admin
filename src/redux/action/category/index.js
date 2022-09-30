import Api from "../../../api/Api";

const getCategories = () => (dispatch) => {
  Api.get("/categories")
    .then((res) => {
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getCategory = (id) => (dispatch) => {
  Api.get(`/categories/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_CATEGORY",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const storeCategory = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/categories", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateCategory = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/categories/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyCategory = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/categories/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export {
  getCategories,
  getCategory,
  storeCategory,
  updateCategory,
  destroyCategory,
};
