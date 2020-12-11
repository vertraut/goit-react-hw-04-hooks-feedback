import s from './Feedback.module.css';

const Buttons = ({ event, options }) => {
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button key={option} onClick={event}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
