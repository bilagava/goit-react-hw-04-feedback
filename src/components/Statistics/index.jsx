import PropTypes from 'prop-types';
import styles from './style.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li className={styles.item}>Good: {good}</li>
    <li className={styles.item}>Neutral: {neutral}</li>
    <li className={styles.item}>Bad: {bad}</li>
    <li className={styles.itemTotal}>Total: {total}</li>
    <li className={styles.itemPositive}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
