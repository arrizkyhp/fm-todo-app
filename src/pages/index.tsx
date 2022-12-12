import DarkModeSwitcher from '~/ui/DarkModeSwitcher/DarkModeSwitcher';

import styles from '../common/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>
          🎉 Welcome to{' '}
          <a href="https://nextjs.org" className={styles.link}>
            Next.js! Starter🎉
          </a>
          <DarkModeSwitcher />
        </h2>
      </div>
    </div>
  );
}
