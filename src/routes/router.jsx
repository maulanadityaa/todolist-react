import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import TodoForm from "../pages/Todo/components/TodoForm";
import TodoList from "../pages/Todo/components/TodoList";

const router = createBrowserRouter([
  {
    path: "/todo",
    element: <Todo />,
    children: [
      {
        path: "add-todo",
        element: <TodoForm />,
      },
      {
        index: true,
        element: <TodoList />,
      },
    ],
  },
]);

export default router;
