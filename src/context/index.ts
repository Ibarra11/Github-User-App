import React from 'react';
import { ThemeMode } from '../shared/types';
const ThemeContext = React.createContext<ThemeMode>({} as ThemeMode);

export { ThemeContext };
