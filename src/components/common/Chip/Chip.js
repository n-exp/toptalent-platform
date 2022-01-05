import { useCallback } from 'react';
import clsx from 'clsx';

import { PlusIcon } from '../../../assets/icons/PlusIcon';
import { CheckIcon } from '../../../assets/icons/CheckIcon';
import { CrossIcon } from '../../../assets/icons/CrossIcon';

import './Chip.scss';

const Chip = ({ id, isSelected, title, onClick, isActive }) => {
  const handleClick = useCallback(() => {
    onClick({ id, title, isActive: !isActive });
  }, [id, isActive, title, onClick]);

  return (
    <div className="uk-flex">
      <div
        className={clsx('chip uk-flex uk-flex-row uk-flex-middle', { active: isActive })}
        onClick={handleClick}
      >
        <div className="label uk-margin-small-right">{title}</div>

        <span>
          {isSelected ? <CrossIcon /> : <span>{isActive ? <CheckIcon /> : <PlusIcon />}</span>}
        </span>
      </div>
    </div>
  );
};

export default Chip;
