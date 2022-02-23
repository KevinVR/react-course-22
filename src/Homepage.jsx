import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <Link to="/click">Click Counter</Link> -
            <Link to="/agify">Agify</Link>
        </div>
    );
};

export default Homepage;