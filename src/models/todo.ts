class Todo {
  id: string;
  todoName: string;

  constructor(todo: string) {
    this.id = new Date().toISOString();
    this.todoName = todo;
  }
}
export default Todo;
