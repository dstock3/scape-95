import {useState, useCallback} from 'react'

function useWindow(minWin, setMinWin, newId, shortcutName, newShortcutId) {

    const selectController = useCallback((obj) => {
        let newArray = minWin
        let check = false
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].value === obj.value) {
                newArray.splice(i, 1, obj)
                check = true 
            } else {
                newArray[i].className = ""
            }
        }
        if (!check) {
            newArray.push(obj)
        }
        
        return newArray
    }, [minWin])

    const minHelper = useCallback((shortcutValue) => {
        let newArray = minWin
        for (let i = 0; i < newArray.length; i++) {
            if ((newArray[i].value === shortcutValue) && (newArray[i].className === "selected")) {
                newArray[i].className = ""
            }
        }
        return newArray
    }, [minWin])

    const closeHelper = useCallback((shortcutValue) => {
        let newArray = minWin
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].value === shortcutValue) {
                newArray.splice(i, 1)
            }
        }
        return newArray
    }, [minWin])

    const [window, setWindow] = useState({shortcut: shortcutName, shortcutId: newShortcutId, isClicked: false, isRightClicked: false, isMin: false})

    const openWindow = useCallback(() => {
        setWindow({ ...window, isClicked: true, isMin: false})
        let windowObj = {
            id: newId,
            value: window.shortcut,
            open: openWindow,
            className: "selected"
        }
        setMinWin(selectController(windowObj)) 
    }, [window, minWin])

    const closeWindow = useCallback(() => {
        setWindow({...window, isClicked: false, isMin: false})
        setMinWin(closeHelper(window.shortcut));
    }, [window, minWin])

    const minWindow = useCallback(() => {
        setWindow({ ...window, isClicked: true, isMin: true})
        setMinWin(minHelper(window.shortcut))
    }, [window, minWin])

    return [window, setWindow, openWindow, closeWindow, minWindow]
}

export default useWindow
