import { extendTheme } from 'native-base';

const colors = {
  primary: {
    50: '#e2efff',
    100: '#b3d0ff',
    200: '#85b1fa',
    300: '#5592f6',
    400: '#2873f3',
    500: '#1159d9',
    600: '#0945aa',
    700: '#02327a',
    800: '#001e4c',
    900: '#000a1e',
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
