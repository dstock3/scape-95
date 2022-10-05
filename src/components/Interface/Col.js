import React from 'react'
import Slot from './Slot'

function Col({colId, slotOne, slotTwo, slotThree, slotFour, slotFive, slotSix, slotSeven, slotEight, slotNine, slotTen}) {
    return (
        <div className="col" id={colId}>
            <Slot content={slotOne} />
            <Slot content={slotTwo} />
            <Slot content={slotThree} />
            <Slot content={slotFour} />
            <Slot content={slotFive} />
            <Slot content={slotSix} />
            <Slot content={slotSeven} />
            <Slot content={slotEight} />
            <Slot content={slotNine} />
            <Slot content={slotTen} />
    </div>
    )
}

export default React.memo(Col)
