import React from 'react'

const Card = ({ weather, city, icon, children }) => {
    return (
        <div>
            <div className="container">
                <h1>{weather}</h1>
                <img className='weatherIcon'
                    src='./src/assets/weather-icons/cloud-rain.svg'
                    alt="icon"
                />
                <div>
                    <h2>How is the weather on:</h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card