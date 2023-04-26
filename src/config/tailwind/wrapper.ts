// @ts-expect-error CaptainCSS doesn't yet export any types so TypeScript doesn't like it. It wants us to write a declaration module, but ideally CaptainCSS would just support types in future
import { pxToRem } from '@captaincss/captaincss/helpers';

export const wrapper = (_theme: any) => {
  return {
    padding: {
      'DEFAULT': pxToRem(22),
      'tablet': pxToRem(40),
      'desk': pxToRem(48),
      'desk-wide': pxToRem(100),
    },
    maxWidth: {
      DEFAULT: pxToRem(10000),
    },
  };
};
