import PropTypes from 'prop-types';
import styles from './style.module.css';

const FeedbackOptions = ({ options, onBtnClick }) => (
  <div>
    {options.map(option => (
      <button
        className={styles.button}
        type="button"
        key={option}
        onClick={() => onBtnClick(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
