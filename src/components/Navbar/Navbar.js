import { Link } from 'react-router-dom';

import Button from '../common/Button/Button';
import Route from '../../routes/state/types';

import { LogoIcon } from '../../assets/icons/LogoIcon';

const Navbar = ({ links, toggleMenu }) => (
  <nav className="navbar uk-navbar-container uk-navbar-transparent uk-padding-small" uk-navbar="">
    <div className="uk-navbar-left uk-flex-nowrap uk-margin-small-right">
      <Link className="uk-navbar-item uk-logo" to={Route.ROOT}>
        <LogoIcon fill="#74141D" />
      </Link>

      <Button classes="uk-text-nowrap uk-visible@m" variant="link">
        Apply as a talent
      </Button>
    </div>

    <div className="uk-navbar-right">
      <div className="uk-flex-middle uk-visible@m" uk-grid="">
        <div className="uk-width-expand uk-child-width-auto uk-flex-nowrap" uk-grid="">
          {links.map((link, linkIdx) => (
            <Button classes="uk-text-truncate" key={linkIdx} variant="link">
              {link}
            </Button>
          ))}
        </div>

        <div className="uk-width-auto">
          <Button>Hire Talent</Button>
        </div>
      </div>

      <span className="menu-button uk-hidden@m" onClick={toggleMenu}>
        <span uk-navbar-toggle-icon="ratio: 2" />
      </span>
    </div>
  </nav>
);

export default Navbar;
