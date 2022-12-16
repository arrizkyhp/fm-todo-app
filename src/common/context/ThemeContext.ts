import { createContext } from 'react';

import { GlobalContentType } from '~/types/GlobalContentType';

const ThemeContext = createContext<GlobalContentType>({
  theme: null,
  setTheme: () => {},
});

export { ThemeContext };
