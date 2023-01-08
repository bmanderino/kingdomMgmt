//Display benefits/bonuses for the advisors
//Hire new advisors to replace existing ones
//View advisor details

import React, { useEffect, useState } from 'react'

const buildAdvisorsList = (obj) => {
    return (
        //TODO: convert to components
        <>
            <div>
                <p>
                    <b>Governor</b>
                </p>
                <p>{obj.governor?.name}</p>
            </div>
            <div>
                <p>
                    <b>Military Commander</b>
                </p>
                <p>{obj.commander?.name}</p>
            </div>
            <div>
                <p>
                    <b>Spy</b>
                </p>
                <p>{obj.spy?.name}</p>
            </div>
            <div>
                <p>
                    <b>Diplomat</b>
                </p>
                <p>{obj.diplomat?.name}</p>
            </div>
        </>
    )
}

export default function Advisors(props) {
    return (
        <div>
            <h1>Advisors</h1>
            {buildAdvisorsList(props.advisors)}
        </div>
    )
}
