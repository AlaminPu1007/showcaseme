/**
 * A mapping of three-letter month abbreviations to their corresponding zero-based index values.
 *
 * This is useful for converting month names into numerical values when working with JavaScript `Date` objects,
 * since JavaScript months are zero-based (January = 0, February = 1, ..., December = 11).
 *
 * @constant {Record<string, number>} monthsMap
 *
 * @example
 * monthsMap["Jan"]; // 0
 * monthsMap["Dec"]; // 11
 */
export const monthsMap: { [key: string]: number } = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

/**
 * Calculates the duration between a given start and end date in years and months.
 *
 * @param {string} workDuration - A string representing the work duration in the format "MMM YYYY - MMM YYYY" or "MMM YYYY - Present".
 *                                Example: "July 2022 - Nov 2024" or "Oct 2024 - Present".
 * @returns {string} The formatted duration string, e.g., "2 yr 5 mo" or "0 yr 1 mo".
 *
 * @example
 * calculateDuration("July 2022 - Nov 2024"); // "2 yr 5 mo"
 * calculateDuration("Oct 2024 - Present");  // "0 yr 1 mo" (if run in Nov 2024)
 */
export const calculateDuration = (workDuration: string): string => {
  const [startStr, endStr] = workDuration.split(' - ');

  // Parse Start Date
  const [startMonth, startYear] = startStr.split(' ');
  const startDate = new Date(parseInt(startYear), monthsMap[startMonth], 1);

  // Parse End Date
  let endDate: Date;
  if (endStr === 'Present') {
    endDate = new Date();
  } else {
    const [endMonth, endYear] = endStr.split(' ');
    endDate = new Date(parseInt(endYear), monthsMap[endMonth] + 1, 0);
  }

  // Calculate difference in months and years
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;

  if (months > 12) {
    years += Math.floor(months / 12);
    months %= 12;
  } else if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${years > 0 ? `${years} yr ` : ''}${months > 0 ? `${months} mo` : ''}`.trim();
};
