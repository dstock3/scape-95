import React from 'react'
import Slot from './Slot'

function Col(props) {
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
    </div>
    )
}

export default React.memo(Col)
