import { ChangeEvent } from 'react';

export type InputTodoProps = {
  handleAddTodo: any;
  handleInputValue: (_event: ChangeEvent<HTMLInputElement>) => void;
  todo: string;
};
