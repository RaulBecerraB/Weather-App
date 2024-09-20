import React from 'react'

const Card = ({ weather, city, icon }) => {
    return (
        <div>
            <div className="container">
                <h1>{weather}</h1>
                <img className='weatherIcon'
                    src='./src/assets/weather-icons/cloud-rain.svg'
                    alt="icon"
                />
                <input type="text" />
            </div>
        </div>
    )
}

export default Card