// @ts-expect-error CaptainCSS doesn't yet export any types so TypeScript doesn't like it. It wasn't us to write a declaration module, but ideally CaptainCSS would just support types in future
import { pxPair, pxToRemPair } from '@captaincss/captaincss/helpers';

/**
 * Use this file for defining your consistent vertical rhythm spacing.
 *
 * If you just need one-off margin or padding on elements, use Tailwind's arbitrary styles, e.g. `u-mb-[14px]`.
 */

export const spacing = {
  px: '1px',
  ...pxPair(0),
  ...pxToRemPair(16),
};
