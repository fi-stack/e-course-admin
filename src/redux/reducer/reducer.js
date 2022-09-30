import { combineReducers } from "redux";
import { services, service } from "./service";
import { categories, category } from "./category";
import { courses, course } from "./course";
import { molecules, molecule } from "./molecule";
import { atoms, atom } from "./atom";
import { orders } from "./order";

const reducer = combineReducers({
  services,
  service,
  categories,
  category,
  courses,
  course,
  molecules,
  molecule,
  atoms,
  atom,
  orders,
});

export default reducer;
