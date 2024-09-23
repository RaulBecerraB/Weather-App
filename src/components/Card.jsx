import React from 'react'

const Card = ({ weather, city, icon, children }) => {
    return (
        <div>
            <div className="container">
                <h1>{weather}</h1>
                <img className='weatherIcon'
                    src={icon}
                alt="icon"
                />
                <div>
                    <h2>How is the weather in:</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card