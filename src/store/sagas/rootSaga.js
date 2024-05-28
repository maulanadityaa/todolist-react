import { all, fork } from "redux-saga/effects";
import { watchGetAllTodos } from "./todoSaga";

export default function* rootSaga() {
  yield all([
    fork(watchGetAllTodos),
    // Tambahkan saga watcher lain di sini
  ]);
}
