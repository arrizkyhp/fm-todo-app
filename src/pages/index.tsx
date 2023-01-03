import styles from '~/styles/Home.module.scss';
import { Header } from '~/ui/Header';
import { InputTodo } from '~/ui/Input';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Header />
        <InputTodo />
      </div>
    </div>
  );
}
