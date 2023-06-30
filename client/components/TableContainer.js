import React from "react";
import Rows from './Rows.js'
const TableContainer = ({rentals}) => {
    
    const rowsArr = [];
    const markComplete = (id) => {
        rentals.forEach((el) => {
            if(el._id === id){
                console.log('found the id, this will be changed')
            }else{
                console.log('this is not the id. Nothing will be changed')
            }
        })
    }
    //add first row with headers
    console.log("rentals")
    console.log(rentals)
    //iterate through rentals and pass each individual rental to Row. First row will be Header row
    for(let i = 0; i < rentals.length; i++){
        //convert strings from DB to dates
        rentals[i].dropoffDate = new Date(rentals[i].dropoffDate);
        rentals[i].pickupDate = new Date(rentals[i].pickupDate);
        //create component
         rowsArr.push(<Rows markComplete = {markComplete} rental = {rentals[i]}/>)
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
export default TableContainer 