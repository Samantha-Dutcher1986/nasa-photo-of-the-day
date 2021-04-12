import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './Photo.css';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const picDiv = styled.div`
    padding: 0.75rem;
    width: 80%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
`

const PicBtn = styled.button`
    border: ${props => props.wheatBorder};
    padding: 1.5rem;
    color: ${props => props.primaryColor};
    background-color: ${props => props.secondaryColor};
    font-weight: bolder;
    font-size: 16px;
    margin: 1.5rem;

    &:hover{
        border: ${props => props.blackBorder};
        background-color: ${props => props.primaryColor};
        color: ${props => props.secondaryColor};
    }
`

const PicImg = styled.img`
    border: ${props => props.wheatBorder};
    box-shadow: 8px 8px 8px 8px #000000;
`

const Pic = () => {
    const [picData, setPicData] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const url = `https://api.nasa.gov/planetary/apod?api_key=V0WSaey6S6VCtwwhHuUVzDY7giVQ2BTTmcxz3EO6&date=2021-04-11${count}`

    axios
        .get(url)
        .then(response => setPicData(response.data.url))
        .catch(error => console.log(error))
        setPic()
    }, [count], () => count);

    return (
        <ContainerDiv>
            <picDiv>
                <PicImg src={picData} alt='Nasa Pic of the Day'  />
                <PicBtn onClick = {() => setCount(count === 10 ? count - 10 : count + 1)}>Click for New Image</PicBtn>
            </picDiv>
        </ContainerDiv>
    )
}

export default Pic;