/**
 * The copyright year should be from when the website was first published.
 * People update it every year to not seem "out of date", but this is infact nullifying their copyright claim for previous years.
 *
 * Therefore, to keep it correct without seeming outdated, we show both the original year and the current year, with a separator.
 *   e.g. 2021-2023
 * If original and current are the same, we'll just return the original year.
 *   e.g. 2023
 *
 * @param originalYear
 * @param $separator
 * @return string
 */
export function getCopyrightYear(originalYear?: number, $separator = '—') {
  const currentYear = (new Date()).getFullYear();

  return originalYear === currentYear ? originalYear : `${originalYear}${$separator}${currentYear}`;
}
