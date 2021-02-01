export interface ITodo {
  id: number;
  content: string;
  computed: boolean
}
export interface IStore {
  todoList: ITodo[]
}
export interface IAction {
  type: ACTION_TYPE,
  payload: ITodo | number | ITodo[]
}
export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  INIT_TODO = 'initTodo'
}


