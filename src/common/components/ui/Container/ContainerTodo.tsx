import styles from '~/styles/ui/ContainerTodo.module.scss';

const ContainerTodo = () => {
  return (
    <div className={styles.container}>
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
