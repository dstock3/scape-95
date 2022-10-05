import React from 'react'
import Slot from './Slot'

function HidCol({colId, slotOne, slotTwo, slotThree, slotFour, slotFive, slotSix, slotSeven, slotEight, slotNine, slotTen, slotEleven, slotTwelve, slotThirteen, slotFourteen, slotFifteen, slotSixteen, slotSeventeen, slotEighteen, slotNineteen, slotTwenty}) {
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
            <Slot content={slotEleven} />
            <Slot content={slotTwelve} />
            <Slot content={slotThirteen} />
            <Slot content={slotFourteen} />
            <Slot content={slotFifteen} />
            <Slot content={slotSixteen} />
            <Slot content={slotSeventeen} />
            <Slot content={slotEighteen} />
            <Slot content={slotNineteen} />
            <Slot content={slotTwenty} />
        </div>
    )
}

export default HidCol
