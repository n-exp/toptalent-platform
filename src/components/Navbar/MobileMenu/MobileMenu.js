import clsx from "clsx";

const MobileMenu = ({ links, isMenuOpened }) => (
  <div
    className={clsx("mobile-menu uk-animation-slide-right uk-hidden@m", {
      "uk-hidden": !isMenuOpened,
    })}
  >
    <hr />

    <div
      className="uk-child-width-auto uk-flex uk-flex-column uk-flex-middle uk-grid-column-collapse uk-grid-row-small"
      uk-grid=""
    >
      {links.map((link, linkIdx) => (
        <div
          key={linkIdx}
          className="menu-item uk-box-shadow-hover-small uk-border-pill uk-text-uppercase"
        >
          {link}
        </div>
      ))}
    </div>

    <hr />
  </div>
);

export default MobileMenu;
