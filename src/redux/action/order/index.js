import Api from "../../../api/Api";

const getOrders = () => (dispatch) => {
  Api.get("/orders")
    .then((res) => {
      dispatch({
        type: "GET_ORDERS",
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

const approve = (id) => {
  return new Promise((resolve, reject) => {
    Api.get(`/orders/${id}/approve`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
};

export { getOrders, approve };
