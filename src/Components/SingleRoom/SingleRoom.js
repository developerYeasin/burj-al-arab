import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/bedroom1.jpg'

const singleRoom = () => {
    return (
        <div className="col-md-4">
            <div className="card">
                <Link to="./roomDetails"><img src={img} alt="" className="w-100" /></Link>
                <p className="room-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus veritatis repellendus ullam. Id delectus fugit porro dolorem aperiam odio?</p>
                <Link to="/billing">Room Book</Link>
            </div>
        </div>
    );
};

export default singleRoom;