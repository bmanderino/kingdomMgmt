import React from 'react'
import { Link } from 'react-router-dom'

export default function StartMenu({ props }) {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/game">New Game</Link>
                </li>
                <li>
                    <Link to="/game">Continue</Link>
                </li>
            </ul>
        </div>
    )
}
