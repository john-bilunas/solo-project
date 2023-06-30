import React from "react";
import Rows from './Rows.js'
import PastRows from "./PastRows.js";
const PastTable = (props) => {
    const {pastRentals} = props;
    const rowsArr = [];

    //add first row with headers
    console.log("pastRentals")
    console.log(pastRentals)
    //iterate through rentals and pass each individual rental to Row. First row will be Header row
    for(let i = 0; i < pastRentals.length; i++){
        //convert strings from DB to dates
        pastRentals[i].dropoffDate = new Date(pastRentals[i].dropoffDate);
        pastRentals[i].pickupDate = new Date(pastRentals[i].pickupDate);
        //create component
         rowsArr.push(<PastRows pastRental = {pastRentals[i]}/>)
    }

    
    return(
        <table id = "tableContainer">
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Yards</th>
                <th>Dropoff Time</th>
                <th>Pick-up Time</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
            {rowsArr}
        </table>
    )
}
export default PastTable