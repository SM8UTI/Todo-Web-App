import { createSlice } from "@reduxjs/toolkit";

const getItems = () => {
  const localTodos = localStorage.getItem("todo");

  if (localTodos) {
    return JSON.parse(localTodos);
  }
  localStorage.setItem("todo", []);
  return [];
};

const initialValue = {
  todoList: getItems(),
};

const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = localStorage.getItem("todo");
      if (todoList) {
        const todoArr = JSON.parse(todoList);
        todoArr.push({
          ...action.payload,
        });
        localStorage.setItem("todo", JSON.stringify(todoArr));
      } else {
        localStorage.setItem(
          "todo",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoLocal = localStorage.getItem("todo");
      if (todoLocal) {
        const todoArr = JSON.parse(todoLocal);
        todoArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoArr.splice(index, 1);
          }
        });
        localStorage.setItem("todo", JSON.stringify(todoArr));
        state.todoList = todoArr;
      }
    },
  },
});

export const { addTodo, deleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
