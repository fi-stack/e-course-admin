import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getMolecule, updateMolecule } from "../../redux/action/molecule";
import { getCourses } from "../../redux/action/course";

const Molecule = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMolecule(id));
    dispatch(getCourses());
  }, [id]);

  const { molecule } = useSelector((state) => state.molecule);
  const { courses } = useSelector((state) => state.courses);

  const [ordinal = molecule?.ordinal, setOrdinal] = useState();
  const [courseId = molecule?.course_id, setCourseId] = useState();
  const [name = molecule?.name, setName] = useState();
  const [validation, setValidation] = useState();

  const navigate = useNavigate();

  const formMolecule = (e) => {
    e.preventDefault();

    const form = {
      ordinal,
      course_id: courseId,
      name,
    };

    updateMolecule(id, form)
      .then((res) => {
        toast.success(res.message);
        navigate("/molecules");
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
              <h1>Molekul</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Create</a>
                </li>
                <li className="breadcrumb-item active">Molekul</li>
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
            <form onSubmit={formMolecule}>
              <div class="form-group">
                <label>Kursus</label>
                <select
                  class="form-control"
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                >
                  <option value="">Pilih Kursus</option>
                  {courses?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
                <small class="form-text text-danger">
                  {validation?.course_id}
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
                <label>Nama</label>
                <input
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <small class="form-text text-danger">{validation?.name}</small>
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

export default Molecule;
