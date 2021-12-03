import Button from "../common/Button/Button";

import { LogoIcon } from "../../assets/icons/LogoIcon";

const Navbar = ({ links, toggleMenu }) => (
  <nav
    className="navbar uk-navbar-container uk-navbar-transparent uk-padding-small"
    uk-navbar=""
  >
    <div className="uk-navbar-left uk-flex-nowrap uk-margin-small-right">
      <a className="uk-navbar-item uk-logo" href="/">
        <LogoIcon fill="#4EAD8B" />
      </a>

      <Button classes="uk-text-nowrap uk-visible@m" type="link">
        Apply as a talent
      </Button>
    </div>

    <div className="uk-navbar-right">
      <div className="uk-flex-middle uk-visible@m" uk-grid="">
        <div
          className="uk-width-expand uk-child-width-auto uk-flex-nowrap"
          uk-grid=""
        >
          {links.map((link, linkIdx) => (
            <Button classes="uk-text-truncate" key={linkIdx} type="link">
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
