import clsx from 'clsx';
import './Tag.scss';

const Tag = ({ size, color = 'default', title }) => {
  return (
    <span
      className={clsx(`tag-component uk-flex-inline uk-flex-middle ${color}`, { [size]: size })}
    >
      <span className="tag-title">{title}</span>
    </span>
  );
};
export default Tag;
