import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div>
            <h1>Page not found</h1>
            <p>
                Get out of here! Can't you see we don't want you anymore? Why
                can't you go back where you came from? Now, leave us alone!
            </p>
            <p>Go.</p>
            <Link to="/">
                <p>
                    <b>GO!</b>
                </p>
            </Link>
            <sub>Goodbye, my friend.</sub>
        </div>
    )
}
