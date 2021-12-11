import './Divider.scss';

const Divider = ({ type = 'default' }) => <hr className={`divider-component divider-${type}`} />;

export default Divider;
