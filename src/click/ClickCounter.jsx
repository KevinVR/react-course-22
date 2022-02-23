import React, {useState} from 'react';

const ClickCounter = ({initialValue, onClick}) => {
    const [clicks, setClicks] = useState(parseInt(initialValue) || 0);

    const localOnClick = () => {
        setClicks(clicks + 1);
        onClick && onClick();
    };

    return (
        <div>
            <h2>Click Counter</h2>
            Clicks: {clicks} - <button onClick={localOnClick}>Click me!</button>
        </div>
    );
};

export default ClickCounter;