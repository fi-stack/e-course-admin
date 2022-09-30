import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import GlobalApp from "./layouts/GlobalApp";
import MainApp from "./layouts/MainApp";
import Service from "./pages/service";
import ServiceCreate from "./pages/service/create";
import Category from "./pages/category";
import CategoryCreate from "./pages/category/create";
import CategoryUpdate from "./pages/category/update";
import Course from "./pages/course";
import CourseCreate from "./pages/course/create";
import CourseUpdate from "./pages/course/update";
import Molecule from "./pages/molecule";
import MoleculeCreate from "./pages/molecule/create";
import MoleculeUpdate from "./pages/molecule/update";
import Atom from "./pages/atom";
import AtomCreate from "./pages/atom/create";
import Order from "./pages/order";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="services" element={<MainApp />}>
              <Route index element={<Service />} />
              <Route path="create" element={<ServiceCreate />} />
            </Route>
            <Route path="categories" element={<MainApp />}>
              <Route index element={<Category />} />
              <Route path="create" element={<CategoryCreate />} />
              <Route path=":id" element={<CategoryUpdate />} />
            </Route>
            <Route path="courses" element={<MainApp />}>
              <Route index element={<Course />} />
              <Route path="create" element={<CourseCreate />} />
              <Route path=":id" element={<CourseUpdate />} />
            </Route>
            <Route path="molecules" element={<MainApp />}>
              <Route index element={<Molecule />} />
              <Route path="create" element={<MoleculeCreate />} />
              <Route path=":id" element={<MoleculeUpdate />} />
            </Route>
            <Route path="atoms" element={<MainApp />}>
              <Route index element={<Atom />} />
              <Route path="create" element={<AtomCreate />} />
            </Route>
            <Route path="orders" element={<MainApp />}>
              <Route index element={<Order />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
