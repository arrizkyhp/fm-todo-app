import { useContext } from 'react';

import { ThemeContext } from '~/context/.';
import { DarkMode } from '~/enum/.';
import { MoonIcon, SunIcon } from '~/svg/.';

const DarkModeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSwitch = () => {
    setTheme(theme === DarkMode.DARK ? DarkMode.LIGHT : DarkMode.DARK);
  };

  return (
    <button
      type="button"
      title="Dark mode switch"
      onClick={handleSwitch}
      aria-label={`${
        theme === DarkMode.DARK ? 'button-switch-light' : 'button-switch-dark'
      }`}
    >
      {theme === DarkMode.DARK ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export { DarkModeSwitcher };
