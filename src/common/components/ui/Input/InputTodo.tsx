import styles from '~/styles/ui/InputTodo.module.scss';

const InputTodo = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        title="input todo"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export { InputTodo };
