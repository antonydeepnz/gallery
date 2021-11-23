import { useCallback, useState } from 'react';

export const useGallery = () => {
  const [selected, setSelected] = useState<number>(0);
  const [active, setActive] = useState<boolean>(false);

  const SelectImage = useCallback(
    (idx) => () => {
      setSelected(idx);
      setActive(true);
    },
    []
  );
  const cancelSelectImage = useCallback(() => {
    setSelected(0);
    setActive(false);
  }, []);

  return {
    selected,
    active,
    SelectImage,
    cancelSelectImage,
  };
};
