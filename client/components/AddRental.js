import React from 'react';
import { useEffect } from 'react';
import EventListener from './EventListerner';

const AddRental = (props) => {
    const {updateAllRentals} = props;

        const formSubmission = (e) => {
            e.preventDefault();
            console.log('submission');
            const form = document.getElementById('addRentalForm');
            const formData = new FormData(form);

            const formObject = {};
            // save all of the k:v pairs to state
            for (var [key, value] of formData.entries()) { 
                console.log(key, value);
                formObject[key] = value;
              }
            console.log(formObject);
            //make post request with fetch
            fetch('/rentals',{
                headers: {"Content-Type" : "application/json"},
                method : "POST",
                body : JSON.stringify(formObject)
            })
            .then(data => console.log(data))
            // .then(data => console.log(data))
            .catch(() => console.log("Error with post request"))

            updateAllRentals();
            
    }

    return (
        <>
            <form id = "addRentalForm" onSubmit = {formSubmission}>
                <label for = "name">Name:</label>
                <input type = "text" id = "name" name = "name" required></input>
                <label for = "email">Email:</label>
                <input type = "email" id = "email" name = "email" required></input>
                <label for = "phone">Phone Number:</label>
                <input type = "text" id = "phone" name = "phone" required></input>
                <label for = "address">Address:</label>
                <input type = "text" id = "address" name = "address" required></input>
                <label for = "size">Dumpster Size (yards):</label>
                <select name = "dumpsterSize">
                    <option value = "10"> 10 Yards</option>
                    <option value = "15"> 15 Yards</option>
                </select>
                <label for = "dropoffDate">Dropoff Date</label>
                <input type = "date"id = "dropoffDate" name = "dropoffDate" required></input>
                <label for = "dropoffTime">Dropoff Time</label>
                <input type = "time"id = "dropoffTime" name = "dropoffTime" required></input>
                <label for = "pickupDate">Pick-up Date</label>
                <input type = "date"id = "pickupDate" name = "pickupDate" required></input>
                <label for = "pickupTime">Pick-up Time</label>
                <input type = "time"id = "pickupTime" name = "pickupTime" required></input>
                <input type = "submit"></input>
            </form>
        </>
    )

}

export default AddRental;