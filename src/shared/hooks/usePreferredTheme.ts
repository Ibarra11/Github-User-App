import { useState } from 'react';

const usePreferredTheme = () => {
  const [userTheme] = useState<'dark' | 'light'>(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  });

  return userTheme;
};

export default usePreferredTheme;
