import { Header } from '~/ui/Header';

import styles from '../common/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <Header />
      </div>
    </div>
  );
}
