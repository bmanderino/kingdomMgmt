import React from 'react'
import Calendar from './Calendar'

export default function Header(props) {
    return (
        <div className="gameHeader">
            <div>Kingdom Name</div>
            <div className="gameHeaderResources">
                <Calendar />
                <div>
                    Gold: {props.gold} | Military Stength: {props.power}
                </div>
                <div>
                    Available Actions: {props.actions}
                    <button type="button">End Turn</button>
                </div>
            </div>
        </div>
    )
}
