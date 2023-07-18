import { Hamster } from "../hamster";

export interface HamsterBookState {
  hamsters: Array<Hamster>
}

export interface AppState {
  hamsterBook: HamsterBookState
}

export const initialState: HamsterBookState = {
  hamsters: [
    { name: 'Marius', text: '2 Jahre alt', image: 'assets/img/hamster5.jpg' },
    { name: 'Franziska', text: 'Gräbt gerne Löcher', image: 'assets/img/hamster6.jpg' },
    { name: 'Josephine', text: 'Spielt gerne', image: 'assets/img/hamster7.jpg' },
    { name: 'Patrick', text: 'Hamsterrad Freak', image: 'assets/img/hamster8.jpg' },
  ]
}
