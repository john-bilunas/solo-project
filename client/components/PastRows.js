import React from "react";

const PastRows = (props) => {
    const {pastRental} = props;
    console.log("pASTrENTAL", pastRental)
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
    const dropoff = displayDate(pastRental.dropoffDate);
    const pickup = displayDate(pastRental.pickupDate);

    return(
        <tr className = 'row'>
            <td>{`${pastRental.name}`}</td>
            <td>{pastRental.address}</td>
            <td>{pastRental.dumpsterSize}</td>
            <td>{`${dropoff} ${pastRental.dropoffTime}`}</td>
            <td>{`${pickup} ${pastRental.pickupTime}`}</td>
            <td>{pastRental.phone}</td>
            <td>{pastRental.email}</td>

        </tr>
       
    )
}


export default PastRows 

