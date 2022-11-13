import React from 'react'


export default function Card(props) {
    let locationIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#f55a5a" d="M12 21a29.776 29.776 0 0 1-3.5-3.531C6.9 15.558 5 12.712 5 10a7 7 0 0 1 11.952-4.951A6.955 6.955 0 0 1 19 10c0 2.712-1.9 5.558-3.5 7.469A29.777 29.777 0 0 1 12 21Zm0-14a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/></svg>
    
    return(
        <div className='card-container'>
            <img className='card-image' src={props.item.image}/>  
            <div className='card-info'>
                <div className='location-row'>
                    {locationIcon} 
                    <span className='location'> {props.item.location} </span> 
                    <span className='google'> View on Google Maps</span>
                </div>
                <h1 className='card-title'>{props.item.title}</h1>    
                <div className='card-date'>{props.item.startDate} - {props.item.endDate}</div> 
                <div className='card-description'>{props.item.description}</div>
            </div>  
        </div>        
    ) 
}

