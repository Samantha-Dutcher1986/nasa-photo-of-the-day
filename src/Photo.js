import React from 'react' 
import styled, { keyframes } from 'styled-components'

const KF = keyframes`
    25% {
        transform: scale(0.8)
    }
    50% {
        transform: scale(1.2)
    }
    100% {
        transform (1.0)
    }
`

const StyledImg = styled.img`
    border: 10px solid ${pr => pr.theme.borderColor};
    &:hover {
        animation: ${KF} 1s forward;
    }
`

const StyledDetails = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function Photo(props) {
    const { imgURL, copyRight, date } = props

    return (
        <div className = 'main-img'>
            <StyledImg src = {imgURL} alt = "NASA's Daily Photo" />
            <StyledDetails className = 'img-details'>
                <h6>Copyright: {copyRight}</h6>
                <h6>Date: {date}</h6>
            </StyledDetails>
        </div>
    )
}