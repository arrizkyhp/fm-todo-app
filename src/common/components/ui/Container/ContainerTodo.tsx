import styles from '~/styles/ui/ContainerTodo.module.scss';
import { ContainerTodoProps } from '~/types/ContainerTodoProps';

import { ListTodo } from '../ListTodo.tsx';

const ContainerTodo = ({
  listTodo,
  handleCompleteTodo,
  handleDeleteTodo,
}: ContainerTodoProps) => {
  return (
    <div className={styles.container}>
      <form className="flex flex-col" action="">
        {listTodo.length === 0 && (
          <p className={styles.noTodo}>
            You don&apos;t have todo yet,
            <br /> please create one first
          </p>
        )}

        {listTodo?.map((list: any) => (
          <ListTodo
            key={list?.id}
            labelFor={list?.id}
            text={list?.text}
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
        {/* <ListTodo labelFor="text1" text="Jog around the park 3x" />
        <ListTodo labelFor="text2" text="10 minutes meditation" />
        <ListTodo labelFor="text3" text="Read for 1 hour" /> */}
      </form>
      <div className={styles.footer}>
        <p>5 items left</p>
        <ul className={styles.filter}>
          <li className={styles.active}>All</li>
          <li>Active</li>
          <li>Completed</li>
        </ul>
        <p className={styles.clearTodo}>Clear Completed</p>
      </div>
    </div>
  );
};

export default ContainerTodo;
