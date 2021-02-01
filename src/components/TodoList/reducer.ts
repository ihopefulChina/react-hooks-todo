import { IStore, ITodo, IAction, ACTION_TYPE } from './typings'
function todoReducer(state: IStore, action: IAction): IStore {
  const { type, payload } = action
  switch (type) {
    case ACTION_TYPE.INIT_TODO:
      //初始化数据
      return {
        ...state, todoList: payload as ITodo[]
      }
    case ACTION_TYPE.ADD_TODO:
      //添加数据
      return {
        ...state, todoList: [...state.todoList, payload as ITodo]
      }
    case ACTION_TYPE.REMOVE_TODO:
      //删除数据 id
      return {
        ...state, todoList: state.todoList.filter(todo => todo.id != payload)
      }
    case ACTION_TYPE.TOGGLE_TODO:
      //check数据
      return {
        ...state, todoList: state.todoList.map(todo => todo.id == payload ? { ...todo, computed: !todo.computed } : { ...todo })
      }
    default: return state
  }
}
export {
  todoReducer
}

