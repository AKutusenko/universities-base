import s from './Button.module.css';

function Button({ onClick, buttonName, type, disabled }) {
  return (
    <button
      type={type}
      className={disabled ? s.disabledButton : s.button}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
}

export { Button };
