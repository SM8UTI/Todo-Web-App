import { createSlice } from "@reduxjs/toolkit";

const getItems = () => {
  const localTodos = localStorage.getItem("todo");

  if (localTodos) {
    return JSON.parse(localTodos);
  }
  localStorage.setItem("todo", []);
  return [];
};

const initialValue = getItems();

const TodoSlice = createSlice({
  name: "Todo",
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
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
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
