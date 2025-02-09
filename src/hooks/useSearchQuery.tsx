import { useEffect, useState } from 'react';

function useSearchQuery(key: string, initValue: string) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key)
      ? String(localStorage.getItem(key))
      : initValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}

export default useSearchQuery;
