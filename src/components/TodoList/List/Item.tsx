import React, { FC, ReactElement } from "react";
import { ITodo } from "../typings";

interface IProps {
  //当前item
  todo: ITodo;
  //删除
  removeTodo: (id: number) => void;
  //input checkBox
  toggleTodo: (id: number) => void;
}

const TdItem: FC<IProps> = ({ todo, removeTodo, toggleTodo }): ReactElement => {
  const { id, content, computed } = todo;
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={computed}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          textDecoration: computed ? "line-through" : "none",
        }}
      >
        {content}
      </span>
      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        删除
      </button>
    </div>
  );
};

export default TdItem;
