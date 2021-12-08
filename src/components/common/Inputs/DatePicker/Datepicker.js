import { useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';

import ArrowLeftIcon from '../../../../assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '../../../../assets/icons/ArrowRightIcon';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

const DatePickerInput = ({ isRange }) => {
  // const [mode, setMode] = useState('date'); // date || month || year
  const initialDate = isRange ? [null, null] : [null];
  const [date, setDate] = useState(initialDate);
  const [startDate, endDate] = date;

  const datepickerProps = useMemo(
    () => ({
      ...(isRange ? { startDate, endDate, selectsEnd: !endDate } : { selected: startDate })
      // ...(mode === 'month' ? { showMonthYearPicker: true } : {}),
      // ...(mode === 'year' ? { showYearPicker: true, yearItemNumber: 59 } : {})
    }),
    [isRange, startDate, endDate /* , mode */]
  );

  const handleChange = (date) => {
    const updatedDate = isRange ? date : [date];

    setDate(updatedDate);
  };

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selectsRange={isRange}
      minDate={new Date()}
      calendarClassName="datepicker-container uk-width-medium uk-width-large@s uk-flex uk-flex-1 uk-flex-center uk-padding-small"
      formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
      renderCustomHeader={({
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        monthDate
      }) => {
        return (
          <div className="header-wrapper uk-flex uk-flex-1 uk-flex-middle uk-flex-between uk-margin uk-padding-small uk-padding-remove-horizontal">
            <span
              aria-label="Previous Month"
              className="header-control-icon uk-width-1-6"
              onClick={decreaseMonth}
              style={prevMonthButtonDisabled ? { visibility: 'hidden' } : null}
            >
              <ArrowLeftIcon />
            </span>
            <div className="header-label uk-width-1-3">
              {monthDate.toLocaleString('en-US', {
                month: 'long'
              })}
            </div>
            <span
              aria-label="Next Month"
              className="header-control-icon uk-width-1-6"
              onClick={increaseMonth}
            >
              <ArrowRightIcon />
            </span>
          </div>
        );
      }}
      shouldCloseOnSelect={false}
      showPopperArrow={false}
      onChange={handleChange}
      disabledKeyboardNavigation
      {...datepickerProps}
    />
  );
};

export default DatePickerInput;
