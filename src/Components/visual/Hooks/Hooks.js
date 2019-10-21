import React, { useState } from 'react';

export function useButtonClicked(initialState) {
  const [buttonClicked, setButtonClicked] = useState(initialState);

  return {
    buttonClicked,
    onButtonClick: e => {
      setButtonClicked(e.currentTarget.value);
    }
  };
}
