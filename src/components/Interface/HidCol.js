import React from 'react'
import Slot from './Slot'

function HidCol(props) {
    return (
        <div className="col" id={props.colId}>
            <Slot content={props.slotOne} />
            <Slot content={props.slotTwo} />
            <Slot content={props.slotThree} />
            <Slot content={props.slotFour} />
            <Slot content={props.slotFive} />
            <Slot content={props.slotSix} />
            <Slot content={props.slotSeven} />
            <Slot content={props.slotEight} />
            <Slot content={props.slotNine} />
            <Slot content={props.slotTen} />
            <Slot content={props.slotEleven} />
            <Slot content={props.slotTwelve} />
            <Slot content={props.slotThirteen} />
            <Slot content={props.slotFourteen} />
            <Slot content={props.slotFifteen} />
            <Slot content={props.slotSixteen} />
            <Slot content={props.slotSeventeen} />
            <Slot content={props.slotEighteen} />
            <Slot content={props.slotNineteen} />
            <Slot content={props.slotTwenty} />
            
        </div>
    )
}

export default HidCol
