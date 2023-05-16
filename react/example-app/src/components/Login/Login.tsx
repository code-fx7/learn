import React, { useState } from 'react';

export default function Login() {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(!login);
    }

// Variante 1    

    // if (login) {
    //     return (
    //         <div>
    //             <p>Hier kannst du dich abmelden</p>
    //             <button onClick={handleLogin}>Logout</button>
    //         </div>
    //     );
    // }

    // return (
    //     <div>
    //         <p>Hier kannst du dich anmelden</p>
    //         <button onClick={handleLogin}>Login</button>
    //     </div>
    // );

// Variante 2

// return (
//     <div>
//         {login ? (
//             <div>
//                 <p>Hier kannst du dich abmelden</p>
//                 <button onClick={handleLogin}>Logout</button>
//             </div>
//         ): (
//             <div>
//                 <p>Hier kannst du dich anmelden</p>
//                 <button onClick={handleLogin}>Login</button>
//             </div>
//         )}
//     </div>
// );

// Variante 3

return (
    <div>
        {login && (
            <div>
                <p>Hier kannst du dich abmelden</p>
                <button onClick={handleLogin}>Logout</button>
            </div>
        )}
        {!login && (
            <div>
                <p>Hier kannst du dich anmelden</p>
                <button onClick={handleLogin}>Login</button>
            </div>
        )}
    </div>
);

};
