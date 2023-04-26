// @ts-expect-error CaptainCSS doesn't yet export any types so TypeScript doesn't like it. It wasn't us to write a declaration module, but ideally CaptainCSS would just support types in future
import { pxToRem } from '@captaincss/captaincss/helpers';

// Below are a decent starting point for breakpoints.
// See: https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
// See: https://gs.statcounter.com/screen-resolution-stats#monthly-202101-202109-bar
// Completely open to adjusting these - they're just based them on these articles for now
// Or if you have ones for your project, set them to whatever you'd like
// - jamie@hexdigital.com - 29/10/2021

export function screens() {
  return {
    'phone-wide': pxToRem('450'),
    'tablet': pxToRem('600'),
    'tablet-wide': pxToRem('900'),
    'desk': pxToRem('1200'),
    'desk-wide': pxToRem('1800'),
  };
}
