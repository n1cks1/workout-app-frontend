import { $axios } from "../../api";
import { WORKOUT } from "./workoutPath";

const LOG = "/log";

class WorkoutLogService {
  getSingle(id) {
    return $axios.get(`${WORKOUT}${LOG}/${id}`);
  }

  create(id) {
    return $axios.post(`${WORKOUT}${LOG}/${id}`);
  }

  update() {
    return $axios.patch(`${WORKOUT}${LOG}/${id}`);
  }
}
export default new WorkoutLogService();
