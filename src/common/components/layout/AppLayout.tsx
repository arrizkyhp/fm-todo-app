import { ChildProps } from '~/types/ChildProps';

import { MainLayout } from './MainLayout';

const AppLayout = ({ children }: ChildProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export { AppLayout };
