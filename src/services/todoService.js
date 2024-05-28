function TodoService() {
  let todos = [
    {
      id: "1",
      task: "Nationalism",
      description: "History of America",
      delegation: "George",
      status: true,
    },
    {
      id: "2",
      task: "Economic",
      description: "Wall Street Downfall",
      delegation: "Josh",
      status: false,
    },
    {
      id: "3",
      task: "Biology",
      description: "Microscopic Creature",
      delegation: "Gretel",
      status: true,
    },
  ];

  const create = (todo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (todo) {
          todos = [...todos, todo];
          console.log(todos);
          resolve(todos);
        } else {
          reject("Todo cant be empty");
        }
      }, 1500);
    });
  };

  const update = (todo) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const existTodo = todos.map((t) => t.id === todo.id);
        if (existTodo) {
          todos = todos.map((t) => {
            if (t.id === todo.id) {
              return { ...todo };
            }
            return t;
          });
          resolve(todos);
        }
        reject("Todo not found");
      }, 1500);
    });
  };

  const deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          todos = todos.filter((t) => t.id != id);
          resolve(todos);
        } else {
          reject("Todo cant be empty");
        }
      }, 1500);
    });
  };

  const getAll = () => {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (todos.length > 0) {
          console.log(todos);
          resolve(todos);
        } else {
          reject("No todo found");
        }
      }, 2000);
    });
  };

  return { create, getAll, update, deleteTodo };
}

export default TodoService;
