import React from "react";

const Rows = (props) => {
    const {pendingRental} = props;
    //declare variables to format date
    const displayDate = (date) =>{
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1; // add one because first month is '0'
        const year = date.getFullYear();
        let ampm = 'AM';
        //create an object to return with time and date properties
     
        return `${month}/${day}/${year}`;
        
    }
    // console.log(rental)
    const dropoff = displayDate(pendingRental.dropoffDate);
    const pickup = displayDate(pendingRental.pickupDate);

    return(
        <tr className = 'row'>
            <td>{`${pendingRental.name}`}</td>
            <td>{pendingRental.address}</td>
            <td>{pendingRental.dumpsterSize}</td>
            <td>{`${dropoff} ${pendingRental.dropoffTime}`}</td>
            <td>{`${pickup} ${pendingRental.pickupTime}`}</td>
            <td>{pendingRental.phone}</td>
            <td>{pendingRental.email}</td>
            <td>
                <button onClick = { () => { props.markComplete(pendingRental._id)}}>Complete</button>
            </td>
        </tr>
       
    )
}


export default Rows 

