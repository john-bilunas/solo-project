import React from "react";
import Rows from './Rows.js'
const TableContainer = ({rentals}) => {
    
    const rowsArr = [];

    //add first row with headers

    //iterate through rentals and pass each individual rental to Row. First row will be Header row
    for(let i = 0; i < rentals.length; i++){
         rowsArr.push(<Rows rental = {rentals[i]}/>)
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