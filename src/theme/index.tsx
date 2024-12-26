import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { theme } from './theme.ts';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const RTL: FC<PropsWithChildren<{ themeDirection: 'rtl' | 'ltr' }>> = ({ children, themeDirection = 'rtl' }) => {
  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  if (themeDirection === 'rtl') {
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <>{children}</>;
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <RTL themeDirection={'rtl'}>
        <CssBaseline />
        {children}
      </RTL>
    </MuiThemeProvider>
  );
};
