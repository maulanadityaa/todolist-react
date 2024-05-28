import { yupResolver } from "@hookform/resolvers/yup";
import { IconDeviceFloppy, IconRestore } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import {
  addTodo,
  getTodo,
  updateTodo,
} from "../../../store/reducers/todoReducer";
import randomNameInstance from "../../../api/randomNameInstance";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  task: yup.string().required("Task is required"),
  description: yup.string().required("Description is required"),
  delegation: yup.string().required("Delegation is required"),
});

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      task: "",
      description: "",
      delegation: "",
      status: false,
    },
  });

  const { todo, isLoading, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (todo) {
      setValue("id", todo.id);
      setValue("task", todo.task);
      setValue("description", todo.description);
      setValue("delegation", todo.delegation);
      setValue("status", todo.status);
    }
  }, [todo]);

  const generateName = async () => {
    const response = await randomNameInstance.get(
      "/Name?nameType=fullname&quantity=1"
    );

    setValue("delegation", response.data[0]);
  };

  const onSubmit = async (data) => {
    if (todo != null) {
      await dispatch(updateTodo(data));
      reset();
    } else {
      const todo = {
        id: new Date().getMilliseconds().toString(),
        task: data.task,
        description: data.description,
        delegation: data.delegation,
        status: data.status,
      };
      await dispatch(addTodo(todo));
      reset();
    }
    navigate("/todo");
  };

  return (
    <>
      <form className="shadow-sm p-4 rounded-4 mb-4">
        <h3>Todo</h3>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">
            Task
          </label>
          <div className="mb-4">
            <input
              type="text"
              name="task"
              id="task"
              className={`form-control ${errors.task && `is-invalid`}`}
              //   value={todo.task != null ? todo.task : ""}
              aria-describedby="task-error"
              {...register("task")}
            />
            {errors.task && (
              <div className="invalid-feedback" id="task-error">
                {errors.task.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className={`form-control ${errors.description && `is-invalid`}`}
              rows="3"
              //   value={todo.description}
              {...register("description")}
            />
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="form-label">
              Delegation
            </label>
            <div className="d-flex">
              <input
                type="text"
                name="delegation"
                id="delegation"
                className={`form-control ${errors.delegation && `is-invalid`}`}
                //   value={todo.task != null ? todo.task : ""}
                aria-describedby="task-error"
                {...register("delegation")}
                readOnly
              />
              <button
                type="button"
                className="btn btn-primary ms-3"
                onClick={generateName}
              >
                Get Name
              </button>
            </div>
            {errors.delegation && (
              <div className="invalid-feedback">
                {errors.delegation.message}
              </div>
            )}
          </div>
        </div>
        <div className="form-check mb-2">
          <input
            type="checkbox"
            id="status"
            className="form-check-input"
            // checked={todo.status}
            {...register("status")}
          />
          <label htmlFor="status" className="form-check-label">
            Status
          </label>
        </div>
        <div className="d-flex me-4">
          <button
            className="btn btn-primary me-2 d-flex align-items-center gap-2"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            <i>
              <IconDeviceFloppy /> Submit
            </i>
          </button>
          <button
            className="btn btn-danger me-2 d-flex align-items-center gap-2 text-white"
            type="button"
            onClick={reset}
          >
            <i>
              <IconRestore /> Reset
            </i>
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
