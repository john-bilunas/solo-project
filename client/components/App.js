import React from "react";
import {useState, useEffect} from 'react';
import TableContainer from './TableContainer.js'
const App = (props) => {
    const [rentals, updateRentals] = useState([
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '555-123-4567',
        address: '123 Main St, Boston, MA',
        dumpsterSize: 10,
        dropoff: new Date(2023, 5, 1, 8, 0),
        pickup: new Date(2023, 5, 5, 10, 0),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@example.com',
        phone: '555-987-6543',
        address: '456 Elm St, Springfield, MA',
        dumpsterSize: 15,
        dropoff: new Date(2023, 5, 2, 9, 30),
        pickup: new Date(2023, 5, 6, 11, 0),
      },
      {
        firstName: 'David',
        lastName: 'Johnson',
        email: 'davidjohnson@example.com',
        phone: '555-555-5555',
        address: '789 Oak St, Cambridge, MA',
        dumpsterSize: 10,
        dropoff: new Date(2023, 5, 3, 10, 0),
        pickup: new Date(2023, 5, 7, 12, 0),
      },
      {
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emilybrown@example.com',
        phone: '555-111-2222',
        address: '321 Pine St, Worcester, MA',
        dumpsterSize: 15,
        dropoff: new Date(2023, 5, 4, 11, 30),
        pickup: new Date(2023, 5, 8, 13, 30),
      },
      {
        firstName: 'Michael',
        lastName: 'Wilson',
        email: 'michaelwilson@example.com',
        phone: '555-333-4444',
        address: '567 Cedar St, Lowell, MA',
        dumpsterSize: 10,
        dropoff: new Date(2023, 5, 5, 12, 0),
        pickup: new Date(2023, 5, 9, 14, 0),
      },
      {
        firstName: 'Sarah',
        lastName: 'Taylor',
        email: 'sarahtaylor@example.com',
        phone: '555-777-8888',
        address: '890 Walnut St, Somerville, MA',
        dumpsterSize: 10,
        dropoff: new Date(2023, 5, 6, 13, 0),
        pickup: new Date(2023, 5, 10, 15, 0),
      },
      {
        firstName: 'Daniel',
        lastName: 'Davis',
        email: 'davisdaniel@example.com',
        phone: '555-222-3333',
        address: '753 Maple St, Quincy, MA',
        dumpsterSize: 15,
        dropoff: new Date(2023, 5, 7, 14, 30),
        pickup: new Date(2023, 5, 11, 16, 30),
      },
      {
        firstName: 'Olivia',
        lastName: 'Anderson',
        email: 'oliviaanderson@example.com',
        phone: '555-444-5555',
        address: '246 Oak St, Brockton, MA',
        dumpsterSize: 10,
        dropoff: new Date(2023, 5, 8, 15, 0),
        pickup: new Date(2023, 5, 12, 17, 0),
      },
      {
        firstName: 'Ethan',
        lastName: 'Moore',
        email: 'ethanmoore@example.com',
        phone: '555-666-7777',
        address: '975 Elm St, New Bedford, MA',
        dumpsterSize: 15,
        dropoff: new Date(2023, 5, 9, 16, 30),
        pickup: new Date(2023, 5, 13, 18, 30),
      },
      {
        firstName: 'Sophia',
        lastName: 'Turner',
        email: 'sophiaturner@example.com',
        phone: '555-888-9999',
        address: '369 Pine St, Lawrence, MA',
        dumpsterSize: 10,
        dropoff: new Date(2023, 5, 10, 17, 0),
        pickup: new Date(2023, 5, 14, 19, 0),
      },
    ])
    useEffect(async () => {
        // console.log("hello")
        const fetchPatients = () => {

            fetch('/rentals')
            .then(data => data.json()) 
            .then(data => console.log(data))
            .catch(console.log("got nothing" + err))
                
            
        } 
        fetchPatients();
        
    }, [])

    console.log(rentals)
    return(
        <div>
            <h1>Rental List</h1>
            <TableContainer rentals = {rentals} />
        </div>
    )


}


export default App;
  
