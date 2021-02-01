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

//init todoList数据
function init(initTodoList: ITodo[]): IStore {
  return { todoList: initTodoList };
}

const TodoList: FC = (): ReactElement => {
  //useState
  //const [todoList, setTodoList] = useState<ITodo[]>([]);

  //useReducer 方法
  const [state, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    //获取储存的数据localStorage-todolist
    const todoList = JSON.parse(localStorage.getItem("todolist") || "[]");
    dispatch({ type: ACTION_TYPE.INIT_TODO, payload: todoList });
  }, []);

  useEffect(() => {
    //数据保存在内存
    localStorage.setItem("todolist", JSON.stringify(state.todoList));
  }, [state.todoList]);

  //添加
  const addTodo = useCallback((todo: ITodo): void => {
    //setTodoList((state.todoList) => [...state.todoList, todo]);
    dispatch({ type: ACTION_TYPE.ADD_TODO, payload: todo });
  }, []);

  //删除
  const removeTodo = useCallback((id: number): void => {
    dispatch({ type: ACTION_TYPE.REMOVE_TODO, payload: id });
  }, []);

  //todo checkBox
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
