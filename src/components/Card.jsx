import React from 'react'

const Card = ({ weather, city, icon }) => {
    return (
        <div>
            <div className="container">
                <h1>{weather}</h1>
                <img className='shadowedPNG'
                    src='./'
                    alt="icon"
                />
            </div>
        </div>
    )
}

export default Card