import { DarkModeSwitcher } from '../DarkModeSwitcher';

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-lightTheme-very-light-gray uppercase text-4xl font-bold tracking-[0.35em]">
        Todo
      </h1>{' '}
      <DarkModeSwitcher />
    </div>
  );
};

export { Header };
