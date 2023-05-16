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

// Variante 2 mit Storybook (ohne Funktion)

// export interface Props {
//     color: string;
//     size: 'small' | 'medium' | 'large';
// }

// export default function List(color:any, size:any) {
    
//     const getStyle = (): React.CSSProperties => ({
//         color: color,
//         fontSize: size === 'large' ? '40px' : size === 'medium' ? '30px' : '20px',
//     });
//     return (
//         <ul>
//             {users.map((user) => (
//                 <li style={getStyle()} key={user.id}>{user.name}, {user.age}</li>
//             ))}
//         </ul>
//     );
// };