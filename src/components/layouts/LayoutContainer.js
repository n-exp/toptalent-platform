const LayoutContainer = ({ children }) => {
  return (
    <main className="uk-section uk-section-default">
      <div className="uk-container uk-container-xsmall">{children}</div>
    </main>
  );
};

export default LayoutContainer;
