import styles from '~/styles/ui/ContainerTodo.module.scss';

import { ListTodo } from '../ListTodo.tsx';

const ContainerTodo = () => {
  return (
    <div className={styles.container}>
      <form className="flex flex-col" action="">
        <ListTodo labelFor="text1" text="Jog around the park 3x" />
        <ListTodo labelFor="text2" text="10 minutes meditation" />
        <ListTodo labelFor="text3" text="Read for 1 hour" />
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
