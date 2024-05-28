import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: null,
  isLoading: false,
  error: null,
};

const todosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getAllTodos: (state, action) => {
      console.log("reducer getAllTodos");

      state.isLoading = true;
      state.error = null;
    },
    getAllTodosSuccess: (state, action) => {
      console.log("reducer getAllTodos");
      state.todos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllTodosFailure: (state, action) => {
      console.log("reducer getAllTodos");
      state.isLoading = false;
      state.error = action.payload;
    },
    getTodo: (state, action) => {
      state.todo = action.payload;
    },
    deleteTodo: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = action.payload;
    },
    deleteTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateTodo: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    updateTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = action.payload;
    },
    updateTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    addTodoSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.todos = action.payload;
    },
    addTodoFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getAllTodos,
  getAllTodosSuccess,
  getAllTodosFailure,
  getTodo,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure,
  updateTodo,
  updateTodoSuccess,
  updateTodoFailure,
  addTodo,
  addTodoSuccess,
  addTodoFailure,
} = todosReducer.actions;

export default todosReducer.reducer;
