import { Dispatch, SetStateAction } from 'react';

export type GlobalContentType = {
  theme: string | null;
  setTheme: Dispatch<SetStateAction<string | null>>;
};
