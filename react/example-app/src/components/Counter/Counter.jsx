import React, { useState, useEffect }from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        document.title = `Du hast ${count} mal geklickt`;
    }, [count]);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if (count > 0) {
    //             setCount(count -1);
    //         }
    //     }, 500);
    //     return() => {
    //         clearTimeout(timeout);
    //     };
    // }, [count]);

    // return (
    //     <div>
    //         <p>Du hast mich {count} mal geklickt</p>
    //         <button onClick={() => setCount(count +1)}>Klick mich</button>
    //     </div>
    // );

    
    function handleButtonClick() {
        setCount(count +1)
    };

    const handleTextField = (event) => {
        setText(event.target.value);
    }
    return (
        <div>
            <p>Du hast mich {count} mal geklickt</p>
            <button onClick={handleButtonClick}>Klick mich</button>
            <input value={text} onChange={handleTextField} />
        </div>
    );


};