import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  fonts: {
    body: 'Mukta, sans-serif',
    heading: 'Mukta, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        background: '#  ',
        color: 'gray.700',
      },
    },
  },
  colors: {
    blue: {
      100: '#CDDEFF',
      500: '#3F7EF8',
      600: '#1852C2',
      800: '#283C6D',
      900: '#202331',
    },
    gray: {
      200: '#E5E7EA',
      400: '#959595',
      700: '#5F636A',
      900: '#323232',
    },
    green: {
      100: '#CFFFE3',
      500: '#62BF89',
    },
    orange: {
      50: '#FFF3EC',
      100: '#FFC9AA',
      500: '#F07F3F',
    },
    input: {
      border: '#62BF89',
      placeholder: '#D2D2D2',
    },
  },
});

export default customTheme;
