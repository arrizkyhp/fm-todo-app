import { MainLayout } from './MainLayout';
import { ChildProps } from '~/types/ChildProps';

const AppLayout = ({ children }: ChildProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export { AppLayout };
