import { combineReducers } from "redux";
import { employees } from "./otherReducer";
import { content } from "./otherReducer";
import { editMode } from "./otherReducer";
import { search } from "./otherReducer";
import { dailys } from "./otherReducer";
import { name } from "./otherReducer";
import { time } from "./otherReducer";
import { onTime } from "./otherReducer";
import { dailySearch } from "./otherReducer";
import { mess } from "./otherReducer";
import { timeMess } from "./otherReducer";
import { mode } from "./otherReducer";
import { dailyMode } from "./otherReducer";

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
});
