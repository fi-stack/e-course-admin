import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { storeService } from "../../redux/action/service";

const Service = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [duration, setDuration] = useState();
  const [discount, setDiscount] = useState();
  const [price, setPrice] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formService = (e) => {
    e.preventDefault();

    const form = {
      name,
      duration,
      discount,
      price,
    };

    storeService(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/services");
      })
      .catch((err) => {
        if (err.message === "validation failed") {
          toast.error(err.message);
          setValidation(err.data);
        } else {
          toast.error(err.message);
        }
      });
  };
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Layanan</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Create</a>
                </li>
                <li className="breadcrumb-item active">Layanan</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <button
              type="button"
              className="btn btn-tool"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fas fa-plus"></i>
            </button>

            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
                title="Collapse"
              >
                <i className="fas fa-minus"></i>
              </button>
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="remove"
                title="Remove"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={formService}>
              <div class="form-group">
                <label>Nama</label>
                <input
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.name}</small>
              </div>
              <div class="form-group">
                <label>Durasi (Hari)</label>
                <input
                  class="form-control"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <small class="form-text text-danger">
                  {validation?.duration}
                </small>
              </div>
              <div class="form-group">
                <label>Diskon</label>
                <input
                  class="form-control"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <small class="form-text text-danger">
                  {validation?.discount}
                </small>
              </div>
              <div class="form-group">
                <label>Harga</label>
                <input
                  class="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.price}</small>
              </div>
              <button type="submit" class="btn btn-primary">
                Simpan
              </button>
            </form>
          </div>
          <div className="card-footer">Footer</div>
        </div>
      </section>
    </>
  );
};

export default Service;
