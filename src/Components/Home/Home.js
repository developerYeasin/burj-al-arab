import React from 'react';
import SingleRoom from '../SingleRoom/SingleRoom';


const Home = () => {
    return (
        <div className='container'>
            <h1>this is home</h1>
            <div className="row">
            <SingleRoom/>
            <SingleRoom/>
            <SingleRoom/>
            </div>
        </div>
    );
};

export default Home;