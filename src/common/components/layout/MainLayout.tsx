/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable camelcase */
import { Josefin_Sans } from '@next/font/google';
import Head from 'next/head';

import { ThemeContext } from 'src/common/context';
import { useDarkMode } from '~/hooks/useDarkMode';
import styles from '~/styles/Main.module.scss';
import { ChildProps } from '~/types/ChildProps';
import { Footer } from '~/ui/.';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const MainLayout = ({ children }: ChildProps) => {
  const { theme, setTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Head>
        <title>Frontend Mentor | Testimonials grid section</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className={`${styles.main} ${josefinSans.className}`}>
        {children}
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export { MainLayout };
