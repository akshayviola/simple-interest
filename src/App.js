import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';


// imports can be done from component.api from react material

function App() {
  // creating state
  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  const[interest,setInterest]=useState("")

 

  const calculateInterest=(e)=>{
    e.preventDefault()

    console.log(principle,rate,year);

    if(!principle||!rate||!year){
    alert('please fill the form completely')
    }
    else{
      setInterest(principle*rate*year/100)
    }
  }
  const resetForm=()=>{

    setPrinciple("")
    setRate("")
    setYear("")
    setInterest(0)

  }

  return (
    <>
      <div className="app">
        <div className='container'>

          {/* heading */}
          <div className='heading-text'>

            <h3 className='title'>SIMPLE INTEREST CALCULATOR</h3>

            <p className='title-para'>Calculate Your Simple Interest</p>
          </div>

          {/* card */}
          <div className='amount-card'>

            <div className='card-text'>
              <h3 className='total-amount'>₹{interest}</h3>
              <p className='title-para'>TOTAL SIMPLE INTEREST</p>
            </div>

          </div>

          <form onSubmit={calculateInterest}>
            {/* to hold text field */}
            <div className='text-fields'>
              {/* principle amount */}
              <div className='input'>
                <TextField value={principle ||""} onChange={e=>setPrinciple(e.target.value)} className='outlined-basic' id="outlined-basic" label="Principal Amount" variant="outlined" />
              </div>
              {/* interest */}

              <div className='input'>
                <TextField value={rate ||""} onChange={e=>setRate(e.target.value)} className='outlined-basic' id="outlined-basic" label="Rate Of Interest (p.a)%" variant="outlined" />
              </div>

              {/* year */}

              <div className='input'>
                <TextField value={year ||""} onChange={e=>setYear(e.target.value)} className='outlined-basic' id="outlined-basic" label="Time Period(yr)" variant="outlined" />
              </div>

            </div>

            {/* button */}

            <div className='btn-group'>
              <Stack direction="row" spacing={2}>
                <Button className='btn' type='submit' style={{backgroundColor:"black"}} variant="contained">Calculate</Button>
                <Button onClick={resetForm} className='btn' variant="outlined">Reset</Button>
              </Stack>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}

export default App;
