import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getCourse, updateCourse } from "../../redux/action/course";
import { getCategories } from "../../redux/action/category";
import { convertToBase64 } from "../../redux/action/convertToBase64";

const Course = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourse(id));
    dispatch(getCategories());
  }, [id]);

  const { course } = useSelector((state) => state.course);
  const { categories } = useSelector((state) => state.categories);

  const [categoryId = course?.category_id, setCategoryId] = useState();
  const [name = course?.name, setName] = useState();
  const [ordinal = course?.ordinal, setOrdinal] = useState();
  const [image, setImage] = useState();
  const [validation, setValidation] = useState();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setImage(await convertToBase64(file));
  };

  const navigate = useNavigate();

  const formCourse = (e) => {
    e.preventDefault();

    const form = {
      category_id: categoryId,
      name,
      ordinal,
      image,
    };

    updateCourse(id, form)
      .then((res) => {
        toast.success(res.message);
        navigate("/courses");
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
              <h1>Kursus</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Create</a>
                </li>
                <li className="breadcrumb-item active">Kursus</li>
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
            <form onSubmit={formCourse}>
              <div class="form-group">
                <label>Kategori</label>
                <select
                  class="form-control"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option value="">Pilih Kategori</option>
                  {categories?.map((value, index) => (
                    <option value={value.id} key={index}>
                      {value.name}
                    </option>
                  ))}
                </select>
                <small class="form-text text-danger">
                  {validation?.category_id}
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
                <label>Image</label>
                <input
                  type="file"
                  class="form-control-file"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleFileUpload(e)}
                />
                <small class="form-text text-danger">{validation?.image}</small>
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

export default Course;
