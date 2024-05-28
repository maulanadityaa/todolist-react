import { IconPlus } from "@tabler/icons-react";
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <div className="container pt-4 px-4">
      <div className="d-flex">
        <h2>Todo</h2>
        <Link
          to={"add-todo"}
          className="btn-primary btn-sm rounded mt-2 ms-2 text-decoration-none"
        >
          <IconPlus size={20} />{" "}
          <span className="fw-medium mt-3"> Add Todo</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Todo;
