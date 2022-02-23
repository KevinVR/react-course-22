import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import clickAtom from '../store/atoms/click.atom';

const ClickCounterState = ({initialValue, onClick, useRecoil = true}) => {
    const [stateClicks, setStateClicks] = useRecoilState(clickAtom);
    const [clicks, setClicks] = useState(parseInt(initialValue) || 0);

    const localOnClick = () => {
        if (useRecoil) {
            setStateClicks(stateClicks + 1);
        } else {
            setClicks(clicks + 1);
        }
        onClick && onClick();
    };

    let displayClicks = useRecoil ? stateClicks : clicks;

    return (
        <div>
            <h2>Click Counter</h2>
            Clicks: {displayClicks} - <button onClick={localOnClick}>Click me!</button>
        </div>
    );
};

export default ClickCounterState;