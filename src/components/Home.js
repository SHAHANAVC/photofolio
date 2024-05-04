
import React from 'react'
// import './Home.css'
import Button from 'react-bootstrap/Button';
import CardDisplay from './CardDisplay';
function Home() {
    
  
  return (
    <div>
    <div className='text-center m-auto pt-5 w-50'>
      
        <h1>I'm Jenny Wilson a Professional Photographer 
          from New York City
        </h1>
        
        <p>Blandis tiom in thr buni forthe new york ahtave illum rtempore in dolerem ohybjn
          hbmfd sed quil libero volouvus est magni
          
        </p>
        <Button variant="success" className='p-3 mb-5 mt-4'>Avaliable for Hire</Button>
        </div>
        <CardDisplay/>
    </div>
  )
}

export default Home