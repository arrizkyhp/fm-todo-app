import { useEffect, useState } from 'react';

import { DarkMode } from '~/enum/.';

const useDarkMode = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(DarkMode.DARK);
      localStorage.theme = DarkMode.DARK;
    } else {
      setTheme(DarkMode.LIGHT);
      localStorage.theme = DarkMode.LIGHT;
    }
  }, []);

  useEffect(() => {
    if (theme === DarkMode.DARK) {
      document.documentElement.classList.add(DarkMode.DARK);
      localStorage.theme = DarkMode.LIGHT;
    } else {
      document.documentElement.classList.remove(DarkMode.DARK);
      localStorage.theme = DarkMode.DARK;
    }
  }, [theme]);

  const handleSwitch = () => {
    setTheme(theme === DarkMode.DARK ? DarkMode.LIGHT : DarkMode.DARK);
  };

  return { handleSwitch };
};

export { useDarkMode };
