/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const Home = (props) => {
    return (
        <div>
            <button onClick = {() =>{
                localStorage.clear();
                props.history.push('/login');
            }}className="btn btn-primary">Logout</button>
        </div>
    )
}

export default Home;