import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getMolecules } from "../../redux/action/molecule";
import { storeAtom } from "../../redux/action/atom";

const Atom = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMolecules());
  }, [dispatch]);

  const { molecules } = useSelector((state) => state.molecules);

  const [moleculeId, setMoleculeId] = useState();
  const [ordinal, setOrdinal] = useState();
  const [title, setTitle] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formAtom = (e) => {
    e.preventDefault();

    const form = {
      ordinal,
      molecule_id: moleculeId,
      title,
    };

    storeAtom(form)
      .then((res) => {
        toast.success(res.message);
        navigate("/atoms");
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
              <h1>Atom</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Create</a>
                </li>
                <li className="breadcrumb-item active">Atom</li>
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
            <form onSubmit={formAtom}>
              <div class="form-group">
                <label>Molekul</label>
                <select
                  class="form-control"
                  value={moleculeId}
                  onChange={(e) => setMoleculeId(e.target.value)}
                >
                  <option value="">Pilih Molekul</option>
                  {molecules?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
                <small class="form-text text-danger">
                  {validation?.molecule_id}
                </small>
              </div>
              <div class="form-group">
                <label>Urutan</label>
                <input
                  class="form-control"
                  value={ordinal}
                  onChange={(e) => setOrdinal(e.target.value)}
                />
                <small class="form-text text-danger">
                  {validation?.ordinal}
                </small>
              </div>
              <div class="form-group">
                <label>Judul</label>
                <input
                  class="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.title}</small>
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

export default Atom;
