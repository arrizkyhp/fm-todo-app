import styles from '~/styles/Home.module.scss';
import { ContainerTodo, Header, InputTodo } from '~/ui/.';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Header />
        <InputTodo />
        <ContainerTodo />
      </div>
    </div>
  );
}
