import React from "react";

const Rows = (props) => {
    const {rental} = props;
    //declare variables to format date
    const displayDate = (date) =>{
        const day = date.getUTCDate();
        const month = date.getMonth() + 1; // add one because first month is '0'
        const year = date.getFullYear();
        let ampm = 'AM';
        //create an object to return with time and date properties
     
        return `${month}/${day}/${year}`;
        
    }
    // console.log(rental)
    const dropoff = displayDate(rental.dropoffDate);
    const pickup = displayDate(rental.pickupDate);

    return(
        <tr className = 'row'>
            <td>{`${rental.name}`}</td>
            <td>{rental.address}</td>
            <td>{rental.dumpsterSize}</td>
            <td>{`${dropoff} ${rental.dropoffTime}`}</td>
            <td>{`${pickup} ${rental.pickupTime}`}</td>
            <td>{rental.phone}</td>
            <td>{rental.email}</td>
            <td>
                <button onClick = { () => { props.markComplete(rental._id)}}>Complete</button>
            </td>
        </tr>
       
    )
}


export default Rows 

