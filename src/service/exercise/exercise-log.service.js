import { $axios } from "../../api";
import { EXERCISES } from "./exercisesPath";

const LOG = `/log`;

class ExerciseLogService {
  getSingle(id) {
    return $axios.get(`${EXERCISES}/${LOG}/${id}`);
  }

  create(id) {
    return $axios.post(`${EXERCISES}/${LOG}/${id}`);
  }

  complete(id, isCompleted) {
    return $axios.patch(`${EXERCISES}/${LOG}/${id}`, isCompleted);
  }

  updateTime(body, timeId) {
    return $axios.put(`${EXERCISES}/${LOG}/time/${timeId}`, body);
  }
}

export default new ExerciseLogService();
