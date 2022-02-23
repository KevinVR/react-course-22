import React from 'react';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <Link to="/click">Click Counter</Link> -
            <Link to="/agify">Agify</Link> -
            <Link to="/recoil-1">Recoil 1</Link> -
            <Link to="/recoil-2">Recoil 2</Link>
        </div>
    );
};

export default Homepage;