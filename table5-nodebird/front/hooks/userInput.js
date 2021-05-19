import { useState, useCallback } from "react";

export default (initialValue = null) => {
  const [param, setParam] = useState(initialValue);
  const handler = useCallback((e) => {
    setParam(e.target.value);
  });
  return [param, handler];
};
