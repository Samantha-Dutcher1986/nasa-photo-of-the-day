import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './Header'
import Photo from './Photo'
import Description from './Description'
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'V0WSaey6S6VCtwwhHuUVzDY7giVQ2BTTmcxz3EO6'
//https://api.nasa.gov/planetary/apod?V0WSaey6S6VCtwwhHuUVzDY7giVQ2BTTmcxz3EO6

function DailyApp() {
    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}?API_KEY=${API_KEY}`)
            .then(res => {
                console.log(res)
                setNasaData(res.data)
                console.log(nasaData);
            })
            .catch(err => {
                console.log('ERROR');
            })
    }, [])

    return (
        <div className = 'App'>
            <Header imgTitle = {nasaData.title} />
            <Photo imgUrl = {nasaData.url} copyRight = {nasaData.copyright} date = {nasaData.date} />
            <Description explanation = {nasaData.explanation} />
        </div>
    );
}

export default DailyApp;