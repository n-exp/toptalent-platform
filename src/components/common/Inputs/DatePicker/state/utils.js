// import toDate from 'date-fns/toDate';
// import parseISO from 'date-fns/parseISO';
// import isValidDate from 'date-fns/isValid';
// import isAfter from 'date-fns/isAfter';
import getMinutes from 'date-fns/getMinutes';
import getHours from 'date-fns/getHours';
import dfIsEqual from 'date-fns/isEqual';

export const isEqual = (date1, date2) => {
  if (date1 && date2) {
    return dfIsEqual(date1, date2);
  } else {
    return !date1 && !date2;
  }
};

// export const isValid = (date, minDate) => {
//   minDate = minDate ? minDate : new Date('1/1/1000');
//   return isValidDate(date) && isAfter(date, minDate);
// };

// export const newDate = (value) => {
//   const d = value
//     ? typeof value === 'string' || value instanceof String
//       ? parseISO(value)
//       : toDate(value)
//     : new Date();
//   return isValid(d) ? d : null;
// };

export const isTimeInList = (time, times) => {
  return times.some(
    (listTime) => getHours(listTime) === getHours(time) && getMinutes(listTime) === getMinutes(time)
  );
};

export const isTimeDisabled = (time, { excludeTimes, includeTimes, filterTime } = {}) => {
  return (
    (excludeTimes && isTimeInList(time, excludeTimes)) ||
    (includeTimes && !isTimeInList(time, includeTimes)) ||
    (filterTime && !filterTime(time)) ||
    false
  );
};
