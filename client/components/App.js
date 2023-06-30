import React from "react";
import {useState, useEffect} from 'react';
import PendingTable from './PendingTable.js'
import PastTable from './PastTable.js'
import AddRental from "./AddRental.js";
const App = (props) => {
    // const [rentals, updateRentals] = useState([
    //   {
    //     name: "John Doe",
    //     email: "john@example.com",
    //     phone: "123-456-7890",
    //     address: "123 Main St",
    //     dumpsterSize: 10,
    //     dropoffDate: new Date("2023-06-22"),
    //     pickupDate: new Date("2023-06-23"),
    //     dropoffTime: "10:00 AM",
    //     pickupTime: "2:00 PM"
    //   },
    //   {
    //     name: "Jane Smith",
    //     email: "jane@example.com",
    //     phone: "987-654-3210",
    //     address: "456 Elm St",
    //     dumpsterSize: 15,
    //     dropoffDate: new Date("2023-06-23"),
    //     pickupDate: new Date("2023-06-24"),
    //     dropoffTime: "9:00 AM",
    //     pickupTime: "1:00 PM"
    //   },
    //   {
    //     name: "Michael Johnson",
    //     email: "michael@example.com",
    //     phone: "555-123-4567",
    //     address: "789 Oak Ave",
    //     dumpsterSize: 10,
    //     dropoffDate: new Date("2023-06-25"),
    //     pickupDate: new Date("2023-06-26"),
    //     dropoffTime: "11:00 AM",
    //     pickupTime: "3:00 PM"
    //   },
    //   {
    //     name: "Emily Davis",
    //     email: "emily@example.com",
    //     phone: "444-789-1234",
    //     address: "321 Pine St",
    //     dumpsterSize: 15,
    //     dropoffDate: new Date("2023-06-27"),
    //     pickupDate: new Date("2023-06-28"),
    //     dropoffTime: "8:00 AM",
    //     pickupTime: "12:00 PM"
    //   },
    //   {
    //     name: "David Wilson",
    //     email: "david@example.com",
    //     phone: "999-888-7777",
    //     address: "567 Maple Ave",
    //     dumpsterSize: 10,
    //     dropoffDate: new Date("2023-06-29"),
    //     pickupDate: new Date("2023-06-30"),
    //     dropoffTime: "9:30 AM",
    //     pickupTime: "1:30 PM"
    //   },
    //   {
    //     name: "Olivia Brown",
    //     email: "olivia@example.com",
    //     phone: "777-555-9999",
    //     address: "789 Cedar St",
    //     dumpsterSize: 15,
    //     dropoffDate: new Date("2023-07-01"),
    //     pickupDate: new Date("2023-07-02"),
    //     dropoffTime: "10:30 AM",
    //     pickupTime: "2:30 PM"
    //   },
    //   {
    //     name: "William Taylor",
    //     email: "william@example.com",
    //     phone: "222-333-4444",
    //     address: "543 Birch Ave",
    //     dumpsterSize: 10,
    //     dropoffDate: new Date("2023-07-03"),
    //     pickupDate: new Date("2023-07-04"),
    //     dropoffTime: "11:30 AM",
    //     pickupTime: "3:30 PM"
    //   },
    //   {
    //     name: "Sophia Anderson",
    //     email: "sophia@example.com",
    //     phone: "666-777-8888",
    //     address: "876 Oak St",
    //     dumpsterSize: 15,
    //     dropoffDate: new Date("2023-07-05"),
    //     pickupDate: new Date("2023-07-06"),
    //     dropoffTime: "8:30 AM",
    //     pickupTime: "12:30 PM"
    //   },
    //   {
    //     name: "James Johnson",
    //     email: "james@example.com",
    //     phone: "111-222-3333",
    //     address: "234 Elm Ave",
    //     dumpsterSize: 10,
    //     dropoffDate: new Date("2023-07-07"),
    //     pickupDate: new Date("2023-07-08"),
    //     dropoffTime: "9:45 AM",
    //     pickupTime: "1:45 PM"
    //   },
    //   {
    //     name: "Ava Martinez",
    //     email: "ava@example.com",
    //     phone: "888-999-1111",
    //     address: "432 Pine St",
    //     dumpsterSize: 15,
    //     dropoffDate: new Date("2023-07-09"),
    //     pickupDate: new Date("2023-07-10"),
    //     dropoffTime: "10:45 AM",
    //     pickupTime: "2:45 PM"
    //   }
    // ])
    const [rentals, updateRentals] = useState([]);
    const [pendingRentals, updatePendingRentals] = useState([]);
    const [pastRentals, updatePastRentals] = useState([]);

    const updateAllRentals = async () => {
        //added await becuase the
        await fetch('/rentals?complete=true')
        .then(data => data.json()) 
        .then(data => {
            console.log("log" ,data.length)
            updatePastRentals(data)
        }) 
        // .then(data => console.log("log" ,data))
        .catch(() => console.log("got nothing"))

        await fetch('/rentals?complete=false')
        .then(data => data.json()) 
        .then(data => {
            console.log("log" ,data.length)
            updatePendingRentals(data)
        }) 
        // .then(data => console.log("log" ,data))
        .catch(() => console.log("got nothing"))

    }

    useEffect( () => {
        console.log("useEffect fetch")
        fetch('/rentals?complete=false')
        .then(data => data.json()) 
        .then(data => {
            console.log("log" ,data.length)
            updatePendingRentals(data)
        }) 
        // .then(data => console.log("log" ,data))
        .catch(() => console.log("got nothing"))

        fetch('/rentals?complete=true')
            .then(data => data.json()) 
            .then(data => {
                console.log("log" ,data.length)
                updatePastRentals(data)
            }) 
            // .then(data => console.log("log" ,data))
            .catch(() => console.log("got nothing"))

        console.log("past" , pastRentals)
        //separate pending and incomplete rentals
    }, [])

    

    console.log(rentals)
    return(
        <div>
            <AddRental updateAllRentals = {updateAllRentals}/>
            <h1>Pending Rentals</h1>
            <PendingTable pendingRentals = {pendingRentals} updateAllRentals = {updateAllRentals} />
            <h1>Complete Rentals</h1>
            <PastTable pastRentals = {pastRentals} updateAllRentals = {updateAllRentals} />
        </div>
    )


}


export default App;
  
