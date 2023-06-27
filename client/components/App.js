import React from "react";
import {useState, useEffect} from 'react';
import Patients from './Patients.js'
const App = (props) => {

    useEffect(async () => {
        // console.log("hello")
        const fetchPatients = () => {

            fetch('/users')
            .then(data => data.json()) 
            .then(data => console.log(data))
            .catch(console.log("got nothing" + err))
                
            
        } 
        fetchPatients();
        
    }, [])


    return(
        <div>
            <h1>App is working</h1>
            <Patients/>
        </div>
    )


}


export default App 