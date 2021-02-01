import React, {
  ReactElement,
  FC,
  useCallback,
  useState,
  useEffect,
  useReducer,
} from "react";
import TdInput from "./Input";
import TdList from "./List";
import { ITodo, IStore, ACTION_TYPE } from "./typings";
import { todoReducer } from "./reducer";

// const initialState: IStore = {
//   todoList: [],
// };

function init(initTodoList: ITodo[]): IStore {
  return { todoList: initTodoList };
}

const TodoList: FC = (): ReactElement => {
  //useState
  //const [todoList, setTodoList] = useState<ITodo[]>([]);

  //useReducer
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todolist") || "[]");
    dispatch({ type: ACTION_TYPE.INIT_TODO, payload: todoList });
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(state.todoList));
  }, [state.todoList]);

  const addTodo = useCallback((todo: ITodo): void => {
    //setTodoList((state.todoList) => [...state.todoList, todo]);
    dispatch({ type: ACTION_TYPE.ADD_TODO, payload: todo });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id });
  }, []);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({ type: ACTION_TYPE.TOGGLE_TODO, payload: id });
  }, []);

  return (
    <div className="todoContent">
      <TdInput addTodo={addTodo} todoList={state.todoList} />
      <TdList
        todoList={state.todoList}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  );
};

export default TodoList;
