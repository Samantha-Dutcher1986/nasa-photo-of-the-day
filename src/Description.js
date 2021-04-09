//img-description will hold daily photo info
import React from 'react'

export default function Description(props) {
    const { explanation } = props

    return(
        <div className = 'img-description'>
            <p>{ explanation }</p>
        </div>
    )
}