import React from "react";

const Rows = (props) => {
    const {rental} = props;
    //declare variables to format date
    const displayDate = (date) =>{
        let minutes = date.getMinutes().toString(); 
        let hours = date.getHours();
        const day = date.getDate();
        const month = date.getMonth() + 1; // add one because first month is '0'
        const year = date.getFullYear();
        let ampm = 'AM';
        //create an object to return with time and date properties

        //Adjust minutes to show a minimum of two digits
        if(minutes.length < 2){
            minutes = '0' + minutes;
        }
        //adjust hours to show AM or PM and
        if(hours > 12){
            ampm = 'PM';
            hours = hours - 12;
            
        }
        const display = {
            date : `${month}/${day}/${year}`,
            time : `${hours}:${minutes} ${ampm}`
        }
        
        return display;
        
    }
    // console.log(rental)
    const dropoff = displayDate(rental.dropoff);
    const pickup = displayDate(rental.pickup);

    return(
        <tr className = 'row'>
            <td>{`${rental.firstName} ${rental.lastName} `}</td>
            <td>{rental.address}</td>
            <td>{rental.dumpsterSize}</td>
            <td>{`${dropoff.date} ${dropoff.time}`}</td>
            <td>{`${pickup.date} ${pickup.time}`}</td>
            <td>{rental.phone}</td>
            <td>{rental.email}</td>
        </tr>
       
    )
}


export default Rows 

