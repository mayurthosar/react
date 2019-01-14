import React from 'react';

function ContactCard(props)
{
    return (
        <div className = "contact-card">
            <img src= {props.contacts.image} style={{width:200}}/>
            <h1>{props.contacts.name}</h1>
            <h3>{props.contacts.city}</h3>
        </div>
    )
}

export default ContactCard