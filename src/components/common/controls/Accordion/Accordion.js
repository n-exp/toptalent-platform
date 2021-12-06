import { useOpen } from '../../../../hooks/useOpen';
import clsx from 'clsx';

import { ChevronDownIcon } from '../../../../assets/icons/ChevronDownIcon';

import './Accordion.scss';

const Accordion = ({ title, children }) => {
  const { opened, toggle } = useOpen();

  return (
    <div className={clsx('accordion-container', { opened })}>
      <div className="control uk-flex uk-flex-between" onClick={toggle}>
        <div className="control-title">{title}</div>
        <div className={clsx('control-icon', { opened })}>
          <ChevronDownIcon />
        </div>
      </div>

      <div className={clsx('content', { opened })}>{children}</div>
    </div>
  );
};

export default Accordion;
