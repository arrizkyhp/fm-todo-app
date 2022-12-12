import { useDarkMode } from '~/hooks/useDarkMode';

const DarkModeSwitcher = () => {
  const { handleSwitch } = useDarkMode();

  return (
    <button type="button" onClick={handleSwitch}>
      DarkModeSwitcher
    </button>
  );
};

export default DarkModeSwitcher;
