import React, { useRef, FC, ReactElement } from "react";
import { ITodo } from "../typings";

interface IProps {
  //添加代办事件
  addTodo: (todo: ITodo) => void;
  //代办数组
  todoList: ITodo[];
}

const TdInput: FC<IProps> = ({ addTodo, todoList }): ReactElement => {
  //ref获取
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = (): void => {
    //格式化input值
    const val: string = inputRef.current!.value.trim();
    if (val.length > 0) {
      //遍历查找相同项
      const isExist = todoList.find((todo) => todo.content == val);
      if (isExist) {
        alert("已存在该项代办");
        return;
      }
      //创建新的代办
      /*
       * id:number new Date().getTime()
       * content:string
       * completed:boolean
       */
      addTodo({ id: new Date().getTime(), content: val, computed: false });
      //清空input框
      inputRef.current!.value = "";
    }
  };

  return (
    <div className="todoInput">
      <input type="text" placeholder="请输入代办项" ref={inputRef} />
      <button onClick={addItem}>增加</button>
    </div>
  );
};

export default TdInput;
