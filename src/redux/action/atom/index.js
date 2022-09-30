import Api from "../../../api/Api";

const getAtoms = () => (dispatch) => {
  Api.get("/atoms")
    .then((res) => {
      dispatch({
        type: "GET_ATOMS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getAtom = (id) => (dispatch) => {
  Api.get(`/atoms/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_ATOM",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const storeAtom = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/atoms", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateAtom = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/atoms/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyAtom = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/atoms/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { getAtoms, getAtom, storeAtom, updateAtom, destroyAtom };
