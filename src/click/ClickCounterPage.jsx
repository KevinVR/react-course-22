import ClickCounter from "./ClickCounter";
import {useState} from "react";
import ClickCounterClass from "./ClickCounterClass";

const ClickCounterPage = () => {
    const initialValues = [0, 10, 20, 30];
    const [totalClicks, setTotalClicks] = useState(initialValues.reduce((a, b) => a + b));

    const onClick = () => {
        setTotalClicks(totalClicks + 1);
    };

    return (
        <div>
            <h1>Click counter page</h1>
            <h2>Total clicks on this page: {totalClicks}</h2>
            {initialValues.map((initialValue, index) => {
                return <div key={index}>
                    <ClickCounter initialValue={initialValue} onClick={onClick}/>
                    {index < initialValues.length - 1 && <hr/>}
                </div>;
            })}

            <h1>Class based click counter</h1>
            <ClickCounterClass initialValue={0} onClick={onClick}/>
        </div>
    );
};

export default ClickCounterPage;