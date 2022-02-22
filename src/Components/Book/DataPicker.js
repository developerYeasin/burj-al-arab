import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Button } from "@mui/material";

const BasicDatePicker = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  const [value, setValue] = useState({
    checkIn: new Date(),
    checkOut: new Date()
  });

  const handleBooking = () => {
    const newBooking = {...loggedInUser, ...value};
     fetch("http://localhost:4000/booking", {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify(newBooking)
     })
     .then(res => res.json())
     .then(data => {
       console.log(data)
     })
     console.log(newBooking)
  }
    
  return (
    <div className="booking">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Check In Date"
          value={value.checkIn}
          onChange={(newValue) => {
            const newDate = { ...value };
            newDate.checkIn = newValue;
            setValue(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="Check Out Date"
          value={value.checkOut}
          onChange={(newValue) => {
            const newDate = { ...value };
            newDate.checkOut = newValue;
            setValue(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
        <Button onClick={handleBooking} variant="contained">
          Book now
        </Button>
    </div>
  );
}
 export default BasicDatePicker;