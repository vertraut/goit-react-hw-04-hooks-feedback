import PropTypes from 'prop-types';

import s from './Feedback.module.css';

const Buttons = ({ event, options }) => {
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button key={option} className={s[option]} onClick={event}>
          {option}
        </button>
      ))}
    </div>
  );
};

Buttons.propTypes = {
  event: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Buttons;
