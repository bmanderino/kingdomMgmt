import React from 'react'

export default function Navigation({ ...props }) {
    const { setCurrentPage } = props

    const handleClick = (value) => {
        setCurrentPage(value)
    }

    return (
        <nav className="mainNavigation">
            <div>
                <button type="button" onClick={() => handleClick('main')}>
                    Main
                </button>
            </div>
            <div>
                <button type="button" onClick={() => handleClick('kingdom')}>
                    Kingdom
                </button>
            </div>
            <div>
                <button type="button" onClick={() => handleClick('diplomacy')}>
                    Diplomacy
                </button>
            </div>
            <div>
                <button type="button" onClick={() => handleClick('military')}>
                    Military
                </button>
            </div>
            <div>
                <button type="button" onClick={() => handleClick('advisors')}>
                    Advisors
                </button>
            </div>
        </nav>
    )
}
