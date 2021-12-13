import { useState } from 'react';

import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { CheckIcon } from '../../../assets/icons/CheckIcon';
import { CrossIcon } from '../../../assets/icons/CrossIcon';

import './Chip.scss';
import clsx from 'clsx';

const Chip = ({ isSelected, title }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="uk-flex">
      <div
        className={clsx('chip uk-flex uk-flex-row uk-flex-middle', { active })}
        onClick={() => setActive((isActive) => !isActive)}
      >
        <div className="label uk-margin-small-right">{title}</div>

        <span>
          {isSelected ? <CrossIcon /> : <span>{active ? <CheckIcon /> : <PlusIcon />}</span>}
        </span>
      </div>
    </div>
  );
};

export default Chip;
