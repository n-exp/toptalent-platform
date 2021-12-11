import { useMemo, useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import addMinutes from 'date-fns/addMinutes';
import startOfDay from 'date-fns/startOfDay';

import { isTimeDisabled } from './state/utils';

import TimePicker from './TimePicker';

import ArrowLeftIcon from '../../../../assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '../../../../assets/icons/ArrowRightIcon';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss';

const DatePickerInput = ({ isRange, selectTime }) => {
  // const [mode, setMode] = useState('date'); // date || month || year
  const initialDate = isRange ? [null, null] : [null];
  const [date, setDate] = useState(initialDate);
  const [startDate, endDate] = date;
  const interval = 30;
  const multiplier = 1440 / interval;
  const base = startOfDay(new Date());
  const times = useMemo(
    () => Array.from({ length: multiplier }, (_, i) => addMinutes(base, i * interval)),
    [base, multiplier]
  );

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const [timeValue, setTimeValue] = useState(null);

  const filterDisabledTime = useCallback((selTime) => {
    if (isTimeDisabled(selTime, { filterTime: filterPassedTime })) {
      return null;
    }
    return selTime;
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const closeTimepicker = () => setIsOpen(false);
  const openTimepicker = () => setIsOpen(true);

  const handleTimeChange = useCallback(
    (time) => {
      const closestTime = times.reduce((prev, curr) => {
        if (!filterDisabledTime(curr)) return prev;

        return Math.abs(curr - time) < Math.abs(prev - time) ? curr : prev;
      }, addDays(startOfDay(new Date()), 1));

      setTimeValue(closestTime);
    },
    [filterDisabledTime, times]
  );

  const datepickerProps = useMemo(
    () => ({
      ...(isRange ? { startDate, endDate, selectsEnd: !endDate } : { selected: startDate }),
      ...(selectTime && {
        open: isOpen,
        onInputClick: openTimepicker,
        onClickOutside: closeTimepicker,
        showTimeInput: true,
        showTimeSelectOnly: true,
        selected: timeValue,
        onChange: handleTimeChange,
        customTimeInput: (
          <TimePicker
            filterTime={filterPassedTime}
            onChangeTime={handleTimeChange}
            times={times}
            timeFormat={'h:mm aaa'}
            interval={interval}
            onClose={closeTimepicker}
          />
        ),
        dateFormat: 'h:mm aa'
      })
      // ...(mode === 'month' ? { showMonthYearPicker: true } : {}),
      // ...(mode === 'year' ? { showYearPicker: true, yearItemNumber: 59 } : {})
    }),
    [
      isRange,
      startDate,
      endDate,
      selectTime,
      timeValue,
      handleTimeChange,
      times,
      isOpen
      /* , mode */
    ]
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
      calendarClassName="datepicker-container uk-width-medium uk-width-large@s uk-flex uk-flex-1 uk-flex-center uk-padding-small uk-height-large uk-overflow-auto"
      formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
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
