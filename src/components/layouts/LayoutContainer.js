const LayoutContainer = ({ children }) => {
  return (
    <main className="uk-section uk-section-default uk-section-large uk-position-relative">
      <div className="uk-container uk-container-xsmall">{children}</div>
    </main>
  );
};

export default LayoutContainer;
