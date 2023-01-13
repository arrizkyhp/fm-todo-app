import { useTodo } from '~/hooks/useTodo';
import styles from '~/styles/Home.module.scss';
import { ContainerTodo, Header, InputTodo } from '~/ui/.';

export default function Home() {
  const {
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleInputValue,
    listTodo,
    todo,
  } = useTodo();

  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Header />
        <InputTodo
          handleAddTodo={handleAddTodo}
          handleInputValue={handleInputValue}
          todo={todo}
        />
        <ContainerTodo
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
          listTodo={listTodo}
        />
      </div>
    </div>
  );
}
