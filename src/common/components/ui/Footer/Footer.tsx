import styles from '~/styles/ui/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Challenge by </span>
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      <span>. Coded by </span>
      <a
        href="https://github.com/arrizkyhp"
        className={styles.link}
        target="_blank"
        rel="noreferrer"
      >
        Arrizky Hasya Pratama.
      </a>
    </footer>
  );
};

export { Footer };
