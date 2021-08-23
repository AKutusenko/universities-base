function Button({ onClick, buttonName }) {
  return (
    <button type="button" onClick={onClick}>
      {buttonName}
    </button>
  );
}

export { Button };
