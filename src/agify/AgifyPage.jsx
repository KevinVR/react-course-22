import React, {useState} from 'react';

const AgifyPage = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState(false);

    const onClick = () => {
        fetch(`https://api.agify.io/?name=${name}`)
            .then(response => response.json())
            .then(data => setAge(data ? data.age : 'unknown'));
    };

    return (
        <div>
            <h1>Agify</h1>
            Your name: <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <button onClick={onClick}>Calculate my age!</button>
            {age && <p>Your age is {age}</p>}
        </div>
    );
};

export default AgifyPage;