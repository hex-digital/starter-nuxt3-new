/**
 * Make sure all imports are relative, starting with `./` and not `~/`.
 * This file isn't processed by webpack. Using `~/` results in some odd runtime problems, without any obvious errors.
 */

import type { Config } from 'tailwindcss';

// @ts-expect-error-next-line CaptainCSS doesn't export types yet
import CaptainCSS from '@captaincss/captaincss';
import { colors } from './config/tailwind/colors';
import { screens } from './config/tailwind/screens';
import { spacing } from './config/tailwind/spacing';
import { safelist } from './config/tailwind/safelist';
import { fontFamily, fontSize, lineHeight } from './config/tailwind/typography';
import { wrapper } from './config/tailwind/wrapper';

export default <Config>{
  safelist,
  plugins: [CaptainCSS],
  prefix: 'u-',
  theme: {
    colors,
    fontFamily,
    fontSize,
    lineHeight,
    screens,
    spacing,
    wrapper,
  },
  content: [
    'app/**/*.{vue,js,ts}',
    'domain/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  captain: {
    prefix: {
      objects: 'o-',
      components: 'c-',
    },
    separator: {
      elements: '__',
      modifiers: '--',
    },
    support: {
      flexGap: true, // https://caniuse.com/flexbox-gap
    },
  },
};
