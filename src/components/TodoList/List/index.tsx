import React, { FC, ReactElement } from "react";
import { ITodo } from "../typings";
import TdItem from "./Item";
interface IPops {
  todoList: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TdList: FC<IPops> = ({
  todoList,
  removeTodo,
  toggleTodo,
}): ReactElement => {
  return (
    <div className="todoList">
      {todoList &&
        todoList.map((todo: ITodo) => {
          return (
            <TdItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
    </div>
  );
};

export default TdList;
