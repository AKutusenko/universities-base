import { useState } from 'react';

function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue(prevValue => !prevValue);
  }
  return [value, toggle];
}

export { useToggle };
