import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Kingdom from '../components/Kingdom'
import Military from '../components/Military'
import Navigation from '../components/Navigation'
import Advisors from '../components/Advisors'
import Diplomacy from '../components/Diplomacy'

import { GenerateKingdom, GenerateDescription } from '../util/GenerateKingdom'

export default function Game() {
    const [currentPage, setCurrentPage] = useState('main')
    const [advisors, setAdvisors] = useState({})
    const [actions, setActions] = useState(2)
    const [gold, setGold] = useState(100)
    const [power, setPower] = useState(100)

    const location = useLocation()
    console.log('🚀 ~ file: game.jsx:22 ~ Game ~ location', location)
    const playerName = location.state[0]
    const kingdomName = location.state[1]

    const [modalOpen, setModalOpen] = useState(true)

    let kingdomDetails = GenerateKingdom(kingdomName)

    // Generate a mad-libs style description of the kingdom
    const description = GenerateDescription(kingdomDetails.features)

    // Function to open the modal
    function openModal() {
        setModalOpen(true)
    }

    // Function to close the modal
    function closeModal() {
        setModalOpen(false)
    }

    useEffect(() => {
        console.log(kingdomDetails.features)
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
            <Header
                name={kingdomName}
                gold={gold}
                power={power}
                actions={actions}
            />
            <Navigation setCurrentPage={setCurrentPage} />
            <p>Welcome, {playerName}</p>
            <div>
                {modalOpen ? (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className="modal-header">
                                <h2>Kingdom of {kingdomName}</h2>
                                <button onClick={closeModal}>×</button>
                            </div>
                            <div className="modal-body">
                                <p>{description}</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
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
