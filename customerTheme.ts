import { extendTheme } from 'native-base';

const colors = {
  primary: {
    50: 'hsla(217, 90%, 35%, 1)',
    100: 'hsla(217, 90%, 40%, 1)',
    200: 'hsla(217, 90%, 45%, 1)',
    300: 'hsla(217, 90%, 50%, 1)',
    400: 'hsla(217, 90%, 55%, 1)',
    500: 'hsla(217, 90%, 60%, 1)',
    600: 'hsla(217, 90%, 65%, 1)',
    700: 'hsla(217, 90%, 70%, 1)',
    800: 'hsla(217, 90%, 75%, 1)',
    900: 'hsla(217, 90%, 80%, 1)',
  },
};

export const theme = extendTheme({
  colors,
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
  components: {},
});
