import { useRef, useLayoutEffect, useCallback } from 'react';
import clsx from 'clsx';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import isBefore from 'date-fns/isBefore';
import addMinutes from 'date-fns/addMinutes';
import getMinutes from 'date-fns/getMinutes';
import getHours from 'date-fns/getHours';
import startOfDay from 'date-fns/startOfDay';
import format from 'date-fns/format';

import { isEqual, isTimeDisabled } from './state/utils';

import ArrowLeftIcon from '../../../../assets/icons/ArrowLeftIcon';

import './TimePicker.scss'

const TimePicker = ({
  date,
  filterTime,
  interval,
  value,
  onChangeTime,
  timeFormat,
  times,
  onClose
}) => {
  const listRef = useRef();
  const centerLi = useRef();

  const base = startOfDay(new Date());
  const currH = getHours(date);
  const currM = getMinutes(date);
  const activeTime = setHours(setMinutes(base, currM), currH);

  const isSelected = useCallback(
    (time) => value && currH === getHours(time) && currM === getMinutes(time),
    [currH, currM, value]
  );

  const isDisabled = useCallback(
    (time) => filterTime && isTimeDisabled(time, { filterTime }),
    [filterTime]
  );

  const handleTimeClick = useCallback(
    (time) => {
      if (isDisabled(time)) return;

      onChangeTime(time);
    },
    [isDisabled, onChangeTime]
  );

  useLayoutEffect(() => {
    const calcCenterPosition = (listRef, centerLiRef) => {
      const listHeight = listRef.clientHeight;
      const offsetTop = centerLiRef.offsetTop - listRef.offsetTop;
      const itemHeight = centerLiRef.clientHeight;

      return offsetTop - (listHeight / 2 - itemHeight / 2);
    };

    const centerPos = calcCenterPosition(listRef.current, centerLi.current);
    listRef.current.scrollTop = centerPos;
  });

  return (
    <div className="timepicker-container uk-flex uk-flex-1 uk-flex-column">
      <div className="timepicker-header uk-flex uk-flex-middle uk-width-1-1 uk-margin-small-bottom">
        <div
          aria-label="Close Timepicker"
          className="uk-width-1-6 uk-flex uk-flex-center"
          onClick={onClose}
        >
          <div className="header-control-icon uk-border-circle uk-flex uk-flex-center uk-padding-small">
            <ArrowLeftIcon fill="#219653" />
          </div>
        </div>

        <div className="header-label uk-width-2-3 uk-text-center uk-padding uk-padding-remove-horizontal">
          {format(new Date(), 'eeee, d MMMM yyyy')}
        </div>
      </div>

      <div
        ref={listRef}
        className="timepicker-time-box uk-overflow-auto uk-flex uk-flex-column uk-flex-middle uk-flex-1"
      >
        {times.map((time, timeIdx) => (
          <span
            key={timeIdx}
            className={clsx('timepicker-time-item uk-border-pill', {
              'time-item-selected': isSelected(time),
              'time-item-disabled': isDisabled(time)
            })}
            onClick={() => handleTimeClick(time)}
            ref={(li) => {
              if (isBefore(time, activeTime) || isEqual(time, activeTime)) {
                centerLi.current = li;
              }
            }}
          >
            {`${format(time, timeFormat)} - ${format(addMinutes(time, interval), timeFormat)}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
