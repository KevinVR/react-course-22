import React from 'react';
import ClickCounterState from "./ClickCounterState";
import {Link} from "react-router-dom";

const ClickCounterStatePage = () => {
    return (
        <div>
            <h1>Click counter with Recoil</h1>
            <ClickCounterState />
            <hr />
            <Link to="/">Home</Link> - <Link to="/recoil-1">Recoil #1</Link> - <Link to="/recoil-2">Recoil #2</Link>
        </div>
    );
};

export default ClickCounterStatePage;