import styles from '~/styles/ui/InputTodo.module.scss';
import { InputTodoProps } from '~/types/InputTodoProps';

const InputTodo = ({
  handleInputValue,
  handleAddTodo,
  todo,
}: InputTodoProps) => {
  return (
    <form className={styles.form} onSubmit={handleAddTodo}>
      <input
        className={styles.input}
        type="text"
        title="input todo"
        placeholder="Create a new todo..."
        value={todo}
        onChange={handleInputValue}
      />
    </form>
  );
};

export { InputTodo };
