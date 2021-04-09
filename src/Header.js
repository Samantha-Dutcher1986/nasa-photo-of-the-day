//holds page title
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: ${pr => pr.theme.darkBlue};
    color: ${pr => pr.theme.white};
`

export default function Header (props) {
    const {imgTitle} = props;

    return (
        <StyledHeader className = 'header-div'>
            <h2>NASA Daily Photo</h2>
            <h3>{imgTitle}</h3>
        </StyledHeader>
    )
}