import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import TodoService from "../../services/todoService";
import {
  addTodo,
  addTodoFailure,
  addTodoSuccess,
  deleteTodo,
  deleteTodoFailure,
  deleteTodoSuccess,
  getAllTodos,
  getAllTodosFailure,
  getAllTodosSuccess,
  updateTodo,
  updateTodoFailure,
  updateTodoSuccess,
} from "../reducers/todoReducer";

function* getAllTodoSaga(action) {
  try {
    const data = yield call(TodoService().getAll);
    console.log("saga getAllTodos", data);
    yield put(getAllTodosSuccess(data));
  } catch (e) {
    yield put(getAllTodosFailure(e.message));
  }
}

function* deleteTodoSaga(action) {
  try {
    const data = yield call(TodoService().deleteTodo, action.payload);
    yield put(deleteTodoSuccess(data));
  } catch (e) {
    console.log(e.message);
    yield put(deleteTodoFailure(e.message));
  }
}

function* updateTodoSaga(action) {
  try {
    const data = yield call(TodoService().update, action.payload);
    yield put(updateTodoSuccess(data));
  } catch (e) {
    yield put(updateTodoFailure(e.message));
  }
}

function* addTodoSaga(action) {
  try {
    const data = yield call(TodoService().create, action.payload);
    console.log("saga addTodoSaga", data);
    yield put(addTodoSuccess(data));
  } catch (e) {
    yield put(addTodoFailure(e.message));
  }
}

export function* watchGetAllTodos() {
  yield takeLatest(getAllTodos.type, getAllTodoSaga);
  yield takeLatest(deleteTodo.type, deleteTodoSaga);
  yield takeLatest(updateTodo.type, updateTodoSaga);
  yield takeLatest(addTodo.type, addTodoSaga);
}
