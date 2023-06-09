// @ts-expect-error CaptainCSS doesn't yet export any types so TypeScript doesn't like it. It wasn't us to write a declaration module, but ideally CaptainCSS would just support types in future
import { pxToRemPair } from '@captaincss/captaincss/helpers';

export const fontFamily = {
  title: ['HeimatSans', 'sans-serif'],
  body: ['HeimatSans', 'sans-serif'],
};

export const fontSize = {
  // Create map of fonts with px keys and rem values, e.g. { 16: 1rem, 32: 2rem }

  // @todo Set up the font sizes for your project, then remove this comment
  ...pxToRemPair(90),
  ...pxToRemPair(80),
  ...pxToRemPair(60),
  ...pxToRemPair(50),
  ...pxToRemPair(44),
  ...pxToRemPair(40),
  ...pxToRemPair(36),
  ...pxToRemPair(30),
  ...pxToRemPair(28),
  ...pxToRemPair(25),
  ...pxToRemPair(20),
  ...pxToRemPair(18),
  ...pxToRemPair(16),
  ...pxToRemPair(14),
  ...pxToRemPair(12),
  ...pxToRemPair(10),
  ...pxToRemPair(1),
};

export const lineHeight = {
  tight: '1',
  normal: '1.3',
};
