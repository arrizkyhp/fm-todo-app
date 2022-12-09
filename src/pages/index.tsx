import styles from '../common/styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h2 className={styles.title}>
          🎉 Welcome to{' '}
          <a href="https://nextjs.org" className="font-bold">
            Next.js! Starter🎉
          </a>
        </h2>
      </div>
    </div>
  );
}
