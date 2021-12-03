import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar";
import { useOpen } from "../../hooks/useOpen";

import "./index.scss";

const NavbarLayout = () => {
  const { opened, toggle } = useOpen();

  const links = ["Home", "Singapore", "Why", "In-demand talents"];
  const mobileMenuLinks = ["Apply as a talent", "Hire Talent", ...links];

  return (
    <div className="navbar-container uk-container uk-container-large">
      <Navbar links={links} toggleMenu={toggle} />

      <MobileMenu links={mobileMenuLinks} isMenuOpened={opened} />
    </div>
  );
};

export default NavbarLayout;
