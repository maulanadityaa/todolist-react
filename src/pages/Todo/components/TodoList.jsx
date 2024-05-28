import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  getAllTodos,
  getTodo,
} from "../../../store/reducers/todoReducer";
import { IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "../../shared/hoc/LoadingAnimation";

const TodoList = () => {
  const { todos, isLoading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dispatching getAllTodosRequest");
    dispatch(getAllTodos());
  }, [dispatch]);

  useEffect(() => {
    console.log("Current todos:", todos);
  }, [todos]);

  const handleEdit = (todo) => {
    dispatch(getTodo(todo));
    navigate("add-todo");
  };

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete?")) return;
    dispatch(deleteTodo(id));
  };

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="shadow-sm p-4 rounded-2 mt-4">
      <h3>Todo List</h3>
      <div className="table-responsive bg-light">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Task</th>
              <th>Description</th>
              <th>Delegation</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos ? (
              <>
                {todos.map((todo, idx) => {
                  return (
                    <tr key={idx} className="bg-light">
                      <td>{++idx}</td>
                      <td>{todo.task}</td>
                      <td>{todo.description}</td>
                      <td>{todo.delegation}</td>
                      <td>
                        <span
                          className={`badge text-white ${
                            todo.status ? `text-bg-success` : `text-bg-danger`
                          }`}
                        >
                          {todo.status ? "Done" : "Not Yet"}
                        </span>
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-info"
                            onClick={() => handleEdit(todo)}
                          >
                            <IconEdit size={22} />
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(todo.id)}
                          >
                            <IconTrash size={22} color="white" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>
                <tr>
                  <td colSpan={5}>
                    <h4 className="text-center">No Todo Available</h4>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
