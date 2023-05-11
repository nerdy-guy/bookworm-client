import { useCallback, useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((prevState) => !prevState);
  }, []);
  return [value, toggle];
};

export default useToggle;
