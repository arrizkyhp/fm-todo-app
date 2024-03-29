export type ListTodoProps = {
  handleCompleteTodo: (_id: string) => void;
  handleDeleteTodo: (_id: string) => void;
  labelFor: string;
  text: string;
};
