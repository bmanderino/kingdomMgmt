import React, { useEffect, useState } from 'react'

import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Kingdom from '../components/Kingdom'
import Military from '../components/Military'
import Navigation from '../components/Navigation'
import Advisors from '../components/Advisors'
import Diplomacy from '../components/Diplomacy'

import advisorsData from '../data/advisors.json'

const generateKingdom = () => {
    let kingdom = {}
    //Create Kingdom assets
    //Create Initial Advisors
    kingdom['advisors'] = defaultAdvisors()

    return kingdom
}

const defaultAdvisors = () => {
    let obj = {
        governor: null,
        commander: null,
        spy: null,
        diplomat: null,
    }
    const namesCopy = [...advisorsData.peasent]
    const keys = Object.keys(obj)

    keys.forEach((key) => {
        const randomIndex = Math.floor(Math.random() * namesCopy.length)
        const randomName = namesCopy[randomIndex]
        obj[key] = randomName
        namesCopy.splice(randomIndex, 1)
    })
    return obj
}

export default function Game() {
    const [currentPage, setCurrentPage] = useState('main')
    const [advisors, setAdvisors] = useState({})
    const [actions, setActions] = useState(2)
    const [gold, setGold] = useState(100)
    const [power, setPower] = useState(100)

    let kingdomDetails = generateKingdom()

    useEffect(() => {
        console.log(kingdomDetails)
        setAdvisors(kingdomDetails.advisors)
    }, [])

    useEffect(() => {
        if (actions === 0) {
            // TODO: Highlight "End Turn Button"
            // TODO: Disable any "action" buttons
            return
        }
    }, [actions])

    const handleActions = () => {
        setActions((actions) => actions - 1)
    }

    const endTurn = () => {
        setActions(2)
    }

    return (
        <>
            <Header gold={gold} power={power} actions={actions} />
            <Navigation setCurrentPage={setCurrentPage} />
            <p>Welcome, your name</p>
            <RenderScreen
                screen={currentPage}
                advisors={{ advisors, setAdvisors }}
                setActions={handleActions}
            />
        </>
    )
}

const RenderScreen = (props) => {
    // console.log(props)
    if (props.screen === 'main') {
        return <Dashboard />
    } else if (props.screen === 'kingdom') {
        return <Kingdom />
    } else if (props.screen === 'military') {
        return (
            <Military
                commander={props.advisors.advisors.commander}
                setActions={props.setActions}
            />
        )
    } else if (props.screen === 'advisors') {
        return (
            <Advisors
                advisors={props.advisors.advisors}
                setAdvisors={props.advisors.setAdvisors}
            />
        )
    } else if (props.screen === 'diplomacy') {
        return <Diplomacy />
    }
}
