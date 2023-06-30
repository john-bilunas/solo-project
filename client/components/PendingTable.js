import React from "react";
import Rows from './Rows.js'
const PendingTable = (props) => {
    const {pendingRentals,updateAllRentals} = props;
    const rowsArr = [];
    const markComplete = (id) => {

        const update = {
            filter: { _id : id},
            update : {complete : true}
        }
        fetch('/rentals',{
            headers: {"Content-Type" : "application/json"},
            method : "PUT",
            body : JSON.stringify(update)
        })
        updateAllRentals();
        // rentals.forEach((el) => {
        //     if(el._id === id){
        //         console.log('found the id, this will be changed')
        //     }else{
        //         console.log('this is not the id. Nothing will be changed')
        //     }
        // })
    }
    //iterate through rentals and pass each individual rental to Row. First row will be Header row
    for(let i = 0; i < pendingRentals.length; i++){
        //convert strings from DB to dates
        pendingRentals[i].dropoffDate = new Date(pendingRentals[i].dropoffDate);
        pendingRentals[i].pickupDate = new Date(pendingRentals[i].pickupDate);
        //create component
         rowsArr.push(<Rows markComplete = {markComplete} pendingRental = {pendingRentals[i]}/>)
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
                <th>Complete</th>
            </tr>
            {rowsArr}
        </table>
    )
}
export default PendingTable