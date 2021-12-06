import { useState } from 'react';
import clsx from 'clsx';

import { CardCheckIcon } from '../../../assets/icons/CardCheckIcon';

import './Card.scss';

function Card() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((isActive) => !isActive);
  };

  return (
    <span className={clsx('card uk-card uk-card-body', { active })} onClick={toggleActive}>
      <div className="card-title uk-card-title">Hire as a Contractor</div>

      <div className="cart-list">
        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-auto uk-flex-middle uk-flex">
            <CardCheckIcon />
          </div>
          <div className="uk-width-expand">Still regarded as a full-time employee</div>
        </div>

        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-auto uk-flex-middle uk-flex">
            <CardCheckIcon />
          </div>
          <div className="uk-width-expand">Invoiced Monthly</div>
        </div>

        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-auto uk-flex-middle uk-flex">
            <CardCheckIcon />
          </div>
          <div className="uk-width-expand">Additional wage credits available</div>
        </div>

        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-auto uk-flex-middle uk-flex">
            <CardCheckIcon />
          </div>
          <div className="uk-width-expand">Benefit and allownace seperate</div>
        </div>
      </div>
    </span>
  );
}

export default Card;
