import React from 'react';

const EventListener = (props) => {

    const form = document.getElementById('addRentalForm');

    form.addEventListener('submit', () => {
        console.log('submitted')
    });
    return(
        <>
        
        </>
    )

}

export default EventListener;