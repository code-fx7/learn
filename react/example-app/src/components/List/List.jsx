import React from 'react';

const users = [
    { id: '1', name: 'Tom', age: 54 },
    { id: '2', name: 'Lisa', age: 34 },
    { id: '3', name: 'Bernd', age: 26 },
    { id: '4', name: 'Lara', age: 23 }
];

// Variante 1

// export default function List() {
//     const update = users.map((user) => (
//         <li key={user.id}>{user.name}, {user.age}</li>
//     ));

//     return (
//         <ul>
//             {update}
//         </ul>
//     );
// ;}

// Variante 2

export default function List() {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}, {user.age}</li>
            ))}
        </ul>
    );
};