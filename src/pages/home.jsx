import React, { useState } from 'react'
import StartMenu from '../components/StartMenu'

const randomName = () => {
    let names = ['Doug', 'Susan', 'Zarkflerper']
    let randomIndex = Math.floor(Math.random() * names.length)
    return names[randomIndex]
}

export default function Home({ props }) {
    const [name, setName] = useState(randomName())
    const [kingdomName, setKingdomName] = useState('')

    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handleKingdomNameInput = (e) => {
        setKingdomName(e.target.value)
    }

    const handleRandomName = () => {
        let newName = randomName()
        setName(newName)
    }

    return (
        <>
            <div>Home</div>
            <label>Enter your name:</label>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={handleNameInput}
            />
            <button onClick={handleRandomName} type="button">
                Random
            </button>
            <input
                type="text"
                placeholder="Your Kingdom's name"
                value={kingdomName}
                onChange={handleKingdomNameInput}
            />
            <StartMenu name={name} kingdom={kingdomName} />
        </>
    )
}
