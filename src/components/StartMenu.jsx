import React from 'react'
import { Link } from 'react-router-dom'

export default function StartMenu(props) {
    return (
        <div>
            <ul>
                <li>
                    {props.kingdom ? (
                        <Link to="/game" state={[props.name, props.kingdom]}>
                            New Game
                        </Link>
                    ) : (
                        'New Game'
                    )}
                </li>
                <li>
                    <Link to="/game">Continue</Link>
                </li>
            </ul>
        </div>
    )
}
