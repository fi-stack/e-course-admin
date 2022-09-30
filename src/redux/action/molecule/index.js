import Api from "../../../api/Api";

const getMolecules = () => (dispatch) => {
  Api.get("/molecules")
    .then((res) => {
      dispatch({
        type: "GET_MOLECULES",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const getMolecule = (id) => (dispatch) => {
  Api.get(`/molecules/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_MOLECULE",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.respnse.data);
    });
};

const storeMolecule = (form) => {
  return new Promise((resolve, reject) => {
    Api.post("/molecules", form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const updateMolecule = (id, form) => {
  return new Promise((resolve, reject) => {
    Api.put(`/molecules/${id}`, form)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

const destroyMolecule = (id) => {
  return new Promise((resolve, reject) => {
    Api.delete(`/molecules/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export {
  getMolecules,
  getMolecule,
  storeMolecule,
  updateMolecule,
  destroyMolecule,
};
