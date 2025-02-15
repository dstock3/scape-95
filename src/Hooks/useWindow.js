import { useState, useCallback } from 'react';

function useWindow(minWin, setMinWin, newId, shortcutName, newShortcutId) {
  const selectController = useCallback((obj) => {
    let found = false;
    const newArray = minWin.map(item => {
      if (item.value === obj.value) {
        found = true;
        return { ...obj }; 
      } else {
        return { ...item, className: "" }; 
      }
    });
    if (!found) {
      newArray.push({ ...obj });
    }
    return newArray;
  }, [minWin]);

  const minHelper = useCallback((shortcutValue) => {
    return minWin.map(item => {
      if (item.value === shortcutValue && item.className === "selected") {
        return { ...item, className: "" };
      }
      return { ...item }; 
    });
  }, [minWin]);

  const closeHelper = useCallback((shortcutValue) => {
    return minWin.filter(item => item.value !== shortcutValue);
  }, [minWin]);

  const [winState, setWinState] = useState({
    shortcut: shortcutName,
    shortcutId: newShortcutId,
    isClicked: false,
    isRightClicked: false,
    isMin: false
  });

  const openWindow = useCallback(() => {
    setWinState(prev => ({ ...prev, isClicked: true, isMin: false }));
    const windowObj = {
      id: newId,
      value: winState.shortcut,
      open: openWindow, 
      className: "selected"
    };
    setMinWin(selectController(windowObj));
  }, [winState, minWin, newId, selectController, setMinWin]);

  const closeWindow = useCallback(() => {
    setWinState(prev => ({ ...prev, isClicked: false, isMin: false }));
    setMinWin(closeHelper(winState.shortcut));
  }, [winState, closeHelper, setMinWin]);

  const minWindow = useCallback(() => {
    setWinState(prev => ({ ...prev, isClicked: true, isMin: true }));
    setMinWin(minHelper(winState.shortcut));
  }, [winState, minHelper, setMinWin]);

  return [winState, setWinState, openWindow, closeWindow, minWindow];
}

export default useWindow;
