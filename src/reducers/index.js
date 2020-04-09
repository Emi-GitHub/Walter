import { combineReducers } from "redux";
import { employees } from "./allReducer";
import { content } from "./allReducer";
import { editMode } from "./allReducer";
import { search } from "./allReducer";
import { dailys } from "./allReducer";
import { name } from "./allReducer";
import { time } from "./allReducer";
import { onTime } from "./allReducer";
import { dailySearch } from "./allReducer";
import { mess } from "./allReducer";
import { timeMess } from "./allReducer";
import { mode } from "./allReducer";
import { dailyMode } from "./allReducer";
import { myNameRef } from "./allReducer";
import { myTimeRef } from "./allReducer";
import { myOnTimeRef } from "./allReducer";

export default combineReducers({
  employees,
  content,
  editMode,
  search,
  dailys,
  name,
  time,
  dailySearch,
  onTime,
  mess,
  timeMess,
  mode,
  dailyMode,
  myNameRef,
  myTimeRef,
  myOnTimeRef,
});
