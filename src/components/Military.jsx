//Increase/Decrease Military strength (costs gold)
//Buy Improvements/Facilities to apply strength bonuses (costs gold)

import React, { useState } from 'react'

const fortifications = [
    { text: 'None' },
    { text: 'A loose pile of snakes', cost: 20, mod: 50 },
    { text: 'Two piles of snakes, I guess?', cost: 50, mod: 'x2' },
    { text: 'A well ordered pile of snakes', cost: 100, mod: 'x4' },
]

export default function Military(props) {
    const [fortiIndex, setFortiIndex] = useState(0)

    const handleBuyUpgrade = () => {
        setFortiIndex((fortiIndex) => fortiIndex + 1)
        props.setActions()
    }

    return (
        <div>
            <h1>Military</h1>
            {/* TODO: Click on name to pop up modal with commander details */}
            <p>Your commander: {props.commander.name}</p>
            <div>
                <p>Your military facilities:</p>
                {/* <div></div> */}
            </div>
            <div>
                <p>Your military fortifications:</p>
                <div>{fortifications[fortiIndex].text}</div>
                <p>Available Upgrades:</p>
                <div
                    style={{
                        border: '1px solid white',
                        width: 'auto',
                        display: 'inline-block',
                        padding: '1em 0.5em',
                    }}
                >
                    <p>{fortifications[fortiIndex + 1].text}</p>
                    <p>cost: {fortifications[fortiIndex + 1].cost} gold</p>
                    <button onClick={handleBuyUpgrade} type="button">
                        Buy
                    </button>
                </div>
            </div>
            <p>Your troops:</p>
        </div>
    )
}
