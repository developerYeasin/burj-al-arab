import React, { useContext, useEffect, useState } from 'react';
import './Book.css'
import { UserContext } from '../../App';
import BasicDatePicker from "./DataPicker";

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookRoom, setBookRoom] = useState([]);
    // console.log(loggedInUser)
    useEffect(() => {
      fetch("http://localhost:4000/booking?email="+loggedInUser.email, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setBookRoom(data.result);
        });
    }, []);
    console.log(bookRoom)
    return (
      <div className="book">
        <h1>Hello,{loggedInUser.displayName}! Let's book a Bouble Room</h1>
        <BasicDatePicker />
        <ol>
          {bookRoom &&
            bookRoom.map((room) => (
              <li key={room._id}>
                {room.displayName} from:{" "}
                {new Date(room.checkIn).toDateString("dd/mm/yyyy")} to
                {new Date(room.checkOut).toDateString("dd/mm/yyyy")}
              </li>
            ))}
        </ol>
      </div>
    );
};

export default Book;