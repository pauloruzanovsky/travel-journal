import React from 'react'
import data from './components/data'
import Header from './components/Header'
import Card from './components/Card'




export default function App() {
    let cards= data.map(item => {
        return(
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    
    return(
        <div>
            <Header/>
            <main>{cards}</main>
        
        </div>
    )
}